var bindings = require('bindings')
var fuse = bindings('fuse_bindings')
var path = require('path')

var noop = function () {}

var FuseBuffer = function () {
  this.length = 0
  this.parent = undefined
}

FuseBuffer.prototype = Buffer.prototype

fuse.setBuffer(FuseBuffer)

exports.mount = function (mnt, ops) {
  if (!ops) ops = {}
  if (/\*|(^,)fuse-bindings(,$)/.test(process.env.DEBUG)) ops.options = ['debug'].concat(ops.options || [])
  return fuse.mount(path.resolve(mnt), ops)
}

exports.unmount = function (mnt, cb) {
  fuse.unmount(path.resolve(mnt), cb || noop)
}

exports.unmountSync = function (mnt) {
  return fuse.unmountSync(path.resolve(mnt))
}

exports.EPERM = -1
exports.ENOENT = -2
exports.ESRCH = -3
exports.EINTR = -4
exports.EIO = -5
exports.ENXIO = -6
exports.E2BIG = -7
exports.ENOEXEC = -8
exports.EBADF = -9
exports.ECHILD = -10
exports.EAGAIN = -11
exports.ENOMEM = -12
exports.EACCES = -13
exports.EFAULT = -14
exports.ENOTBLK = -15
exports.EBUSY = -16
exports.EEXIST = -17
exports.EXDEV = -18
exports.ENODEV = -19
exports.ENOTDIR = -20
exports.EISDIR = -21
exports.EINVAL = -22
exports.ENFILE = -23
exports.EMFILE = -24
exports.ENOTTY = -25
exports.ETXTBSY = -26
exports.EFBIG = -27
exports.ENOSPC = -28
exports.ESPIPE = -29
exports.EROFS = -30
exports.EMLINK = -31
exports.EPIPE = -32
exports.EDOM = -33
exports.ERANGE = -34
exports.EDEADLK = -35
exports.ENAMETOOLONG = -36
exports.ENOLCK = -37
exports.ENOSYS = -38
exports.ENOTEMPTY = -39
exports.ELOOP = -40
exports.EWOULDBLOCK = -11
exports.ENOMSG = -42
exports.EIDRM = -43
exports.ECHRNG = -44
exports.EL2NSYNC = -45
exports.EL3HLT = -46
exports.EL3RST = -47
exports.ELNRNG = -48
exports.EUNATCH = -49
exports.ENOCSI = -50
exports.EL2HLT = -51
exports.EBADE = -52
exports.EBADR = -53
exports.EXFULL = -54
exports.ENOANO = -55
exports.EBADRQC = -56
exports.EBADSLT = -57
exports.EDEADLOCK = -35
exports.EBFONT = -59
exports.ENOSTR = -60
exports.ENODATA = -61
exports.ETIME = -62
exports.ENOSR = -63
exports.ENONET = -64
exports.ENOPKG = -65
exports.EREMOTE = -66
exports.ENOLINK = -67
exports.EADV = -68
exports.ESRMNT = -69
exports.ECOMM = -70
exports.EPROTO = -71
exports.EMULTIHOP = -72
exports.EDOTDOT = -73
exports.EBADMSG = -74
exports.EOVERFLOW = -75
exports.ENOTUNIQ = -76
exports.EBADFD = -77
exports.EREMCHG = -78
exports.ELIBACC = -79
exports.ELIBBAD = -80
exports.ELIBSCN = -81
exports.ELIBMAX = -82
exports.ELIBEXEC = -83
exports.EILSEQ = -84
exports.ERESTART = -85
exports.ESTRPIPE = -86
exports.EUSERS = -87
exports.ENOTSOCK = -88
exports.EDESTADDRREQ = -89
exports.EMSGSIZE = -90
exports.EPROTOTYPE = -91
exports.ENOPROTOOPT = -92
exports.EPROTONOSUPPORT = -93
exports.ESOCKTNOSUPPORT = -94
exports.EOPNOTSUPP = -95
exports.EPFNOSUPPORT = -96
exports.EAFNOSUPPORT = -97
exports.EADDRINUSE = -98
exports.EADDRNOTAVAIL = -99
exports.ENETDOWN = -100
exports.ENETUNREACH = -101
exports.ENETRESET = -102
exports.ECONNABORTED = -103
exports.ECONNRESET = -104
exports.ENOBUFS = -105
exports.EISCONN = -106
exports.ENOTCONN = -107
exports.ESHUTDOWN = -108
exports.ETOOMANYREFS = -109
exports.ETIMEDOUT = -110
exports.ECONNREFUSED = -111
exports.EHOSTDOWN = -112
exports.EHOSTUNREACH = -113
exports.EALREADY = -114
exports.EINPROGRESS = -115
exports.ESTALE = -116
exports.EUCLEAN = -117
exports.ENOTNAM = -118
exports.ENAVAIL = -119
exports.EISNAM = -120
exports.EREMOTEIO = -121
exports.EDQUOT = -122
exports.ENOMEDIUM = -123
exports.EMEDIUMTYPE = -124
