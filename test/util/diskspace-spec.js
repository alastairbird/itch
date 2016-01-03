let test = require('zopf')
let fixture = require('../fixture')
let diskspace = require('../../app/util/diskspace')

test('diskspace', t => {
  t.case('df (OSX 10.11)', async t => {
    t.stub(diskspace, 'df_run').resolves(fixture.lines('diskspace', 'df-osx-10.11'))
    let out = await diskspace.df()
    t.same(out, {
      parts: [
        { free: 10112122880, mountpoint: '/', size: 249769230336 },
        { free: 0, mountpoint: '/dev', size: 187392 }
      ],
      total: { free: 10112122880, size: 249769230336 }
    })
  })

  t.case('df (Ubuntu)', async t => {
    t.stub(diskspace, 'df_run').resolves(fixture.lines('diskspace', 'df-ubuntu-15.10'))
    let out = await diskspace.df()
    t.same(out, {
      parts: [
        { free: 938479616, mountpoint: '/dev', size: 938479616 },
        { free: 166813696, mountpoint: '/run', size: 188514304 },
        { free: 117629616128, mountpoint: '/', size: 125208051712 },
        { free: 942559232, mountpoint: '/dev/shm', size: 942563328 },
        { free: 5242880, mountpoint: '/run/lock', size: 5242880 },
        { free: 942563328, mountpoint: '/sys/fs/cgroup', size: 942563328 },
        { free: 102400, mountpoint: '/run/cgmanager/fs', size: 102400 },
        { free: 188514304, mountpoint: '/run/user/1000', size: 188514304 }
      ],
      total: { free: 117629616128, size: 125208051712 }
    })
  })

  t.case('df (ArchLinux)', async t => {
    t.stub(diskspace, 'df_run').resolves(fixture.lines('diskspace', 'df-archlinux'))
    let out = await diskspace.df()
    t.same(out, {
      parts: [
        { free: 520163328, mountpoint: '/dev', size: 520163328 },
        { free: 522567680, mountpoint: '/run', size: 522940416 },
        { free: 4271767552, mountpoint: '/', size: 7929298944 },
        { free: 522936320, mountpoint: '/dev/shm', size: 522940416 },
        { free: 522940416, mountpoint: '/sys/fs/cgroup', size: 522940416 },
        { free: 522940416, mountpoint: '/tmp', size: 522940416 },
        { free: 1679458304, mountpoint: '/home', size: 2143109120 },
        { free: 10140364800, mountpoint: '/vagrant', size: 249769230336 },
        { free: 104591360, mountpoint: '/run/user/998', size: 104591360 }
      ],
      total: { free: 4271767552, size: 7929298944 }
    })
  })

  t.case('wmic (Windows 10.11)', async t => {
    t.stub(diskspace, 'wmic_run').resolves(fixture.lines('diskspace', 'wmic-windows-8.1'))
    let out = await diskspace.wmic()
    t.same(out, {
      parts: [
        { free: 41468653568, letter: 'C:', size: 128034672640 },
        { free: 193326485504, letter: 'D:', size: 1000194015232 },
        { free: 164778627072, letter: 'E:', size: 1000202039296 }
      ],
      total: { free: 399573766144, size: 2128430727168 }
    })
  })
})
