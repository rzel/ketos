(function() {var implementors = {};
implementors["void"] = ["impl&lt;K,&nbsp;V,&nbsp;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>K, V<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html' title='std::collections::hash::map::HashMap'>HashMap</a>&lt;K,&nbsp;V,&nbsp;S&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a>, S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a></span>","impl&lt;T,&nbsp;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T,&nbsp;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a>, T: <a class='trait' href='core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl&lt;P&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;P&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a> <span class='where'>where P: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt;</span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a,&nbsp;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>",];implementors["libc"] = [];implementors["nix"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/fcntl/struct.SpliceFFlags.html' title='nix::fcntl::SpliceFFlags'>SpliceFFlags</a>&gt; for <a class='struct' href='nix/fcntl/struct.SpliceFFlags.html' title='nix::fcntl::SpliceFFlags'>SpliceFFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/fcntl/struct.OFlag.html' title='nix::fcntl::OFlag'>OFlag</a>&gt; for <a class='struct' href='nix/fcntl/struct.OFlag.html' title='nix::fcntl::OFlag'>OFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/fcntl/struct.FdFlag.html' title='nix::fcntl::FdFlag'>FdFlag</a>&gt; for <a class='struct' href='nix/fcntl/struct.FdFlag.html' title='nix::fcntl::FdFlag'>FdFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/fcntl/struct.SealFlag.html' title='nix::fcntl::SealFlag'>SealFlag</a>&gt; for <a class='struct' href='nix/fcntl/struct.SealFlag.html' title='nix::fcntl::SealFlag'>SealFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/mount/struct.MsFlags.html' title='nix::mount::MsFlags'>MsFlags</a>&gt; for <a class='struct' href='nix/mount/struct.MsFlags.html' title='nix::mount::MsFlags'>MsFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/mount/struct.MntFlags.html' title='nix::mount::MntFlags'>MntFlags</a>&gt; for <a class='struct' href='nix/mount/struct.MntFlags.html' title='nix::mount::MntFlags'>MntFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/mqueue/struct.MQ_OFlag.html' title='nix::mqueue::MQ_OFlag'>MQ_OFlag</a>&gt; for <a class='struct' href='nix/mqueue/struct.MQ_OFlag.html' title='nix::mqueue::MQ_OFlag'>MQ_OFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/mqueue/struct.FdFlag.html' title='nix::mqueue::FdFlag'>FdFlag</a>&gt; for <a class='struct' href='nix/mqueue/struct.FdFlag.html' title='nix::mqueue::FdFlag'>FdFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/poll/struct.EventFlags.html' title='nix::poll::EventFlags'>EventFlags</a>&gt; for <a class='struct' href='nix/poll/struct.EventFlags.html' title='nix::poll::EventFlags'>EventFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sched/struct.CloneFlags.html' title='nix::sched::CloneFlags'>CloneFlags</a>&gt; for <a class='struct' href='nix/sched/struct.CloneFlags.html' title='nix::sched::CloneFlags'>CloneFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/epoll/struct.EpollEventKind.html' title='nix::sys::epoll::EpollEventKind'>EpollEventKind</a>&gt; for <a class='struct' href='nix/sys/epoll/struct.EpollEventKind.html' title='nix::sys::epoll::EpollEventKind'>EpollEventKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/memfd/struct.MemFdCreateFlag.html' title='nix::sys::memfd::MemFdCreateFlag'>MemFdCreateFlag</a>&gt; for <a class='struct' href='nix/sys/memfd/struct.MemFdCreateFlag.html' title='nix::sys::memfd::MemFdCreateFlag'>MemFdCreateFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/signal/struct.SaFlags.html' title='nix::sys::signal::SaFlags'>SaFlags</a>&gt; for <a class='struct' href='nix/sys/signal/struct.SaFlags.html' title='nix::sys::signal::SaFlags'>SaFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/signal/struct.SigFlags.html' title='nix::sys::signal::SigFlags'>SigFlags</a>&gt; for <a class='struct' href='nix/sys/signal/struct.SigFlags.html' title='nix::sys::signal::SigFlags'>SigFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/socket/struct.MsgFlags.html' title='nix::sys::socket::MsgFlags'>MsgFlags</a>&gt; for <a class='struct' href='nix/sys/socket/struct.MsgFlags.html' title='nix::sys::socket::MsgFlags'>MsgFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/socket/struct.SockFlag.html' title='nix::sys::socket::SockFlag'>SockFlag</a>&gt; for <a class='struct' href='nix/sys/socket/struct.SockFlag.html' title='nix::sys::socket::SockFlag'>SockFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/stat/struct.SFlag.html' title='nix::sys::stat::SFlag'>SFlag</a>&gt; for <a class='struct' href='nix/sys/stat/struct.SFlag.html' title='nix::sys::stat::SFlag'>SFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/stat/struct.Mode.html' title='nix::sys::stat::Mode'>Mode</a>&gt; for <a class='struct' href='nix/sys/stat/struct.Mode.html' title='nix::sys::stat::Mode'>Mode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/termios/struct.InputFlags.html' title='nix::sys::termios::InputFlags'>InputFlags</a>&gt; for <a class='struct' href='nix/sys/termios/struct.InputFlags.html' title='nix::sys::termios::InputFlags'>InputFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/termios/struct.OutputFlags.html' title='nix::sys::termios::OutputFlags'>OutputFlags</a>&gt; for <a class='struct' href='nix/sys/termios/struct.OutputFlags.html' title='nix::sys::termios::OutputFlags'>OutputFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/termios/struct.ControlFlags.html' title='nix::sys::termios::ControlFlags'>ControlFlags</a>&gt; for <a class='struct' href='nix/sys/termios/struct.ControlFlags.html' title='nix::sys::termios::ControlFlags'>ControlFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/termios/struct.LocalFlags.html' title='nix::sys::termios::LocalFlags'>LocalFlags</a>&gt; for <a class='struct' href='nix/sys/termios/struct.LocalFlags.html' title='nix::sys::termios::LocalFlags'>LocalFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/wait/struct.WaitPidFlag.html' title='nix::sys::wait::WaitPidFlag'>WaitPidFlag</a>&gt; for <a class='struct' href='nix/sys/wait/struct.WaitPidFlag.html' title='nix::sys::wait::WaitPidFlag'>WaitPidFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/mman/struct.MapFlags.html' title='nix::sys::mman::MapFlags'>MapFlags</a>&gt; for <a class='struct' href='nix/sys/mman/struct.MapFlags.html' title='nix::sys::mman::MapFlags'>MapFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/mman/struct.MsFlags.html' title='nix::sys::mman::MsFlags'>MsFlags</a>&gt; for <a class='struct' href='nix/sys/mman/struct.MsFlags.html' title='nix::sys::mman::MsFlags'>MsFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/mman/struct.ProtFlags.html' title='nix::sys::mman::ProtFlags'>ProtFlags</a>&gt; for <a class='struct' href='nix/sys/mman/struct.ProtFlags.html' title='nix::sys::mman::ProtFlags'>ProtFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/quota/quota/struct.QuotaValidFlags.html' title='nix::sys::quota::quota::QuotaValidFlags'>QuotaValidFlags</a>&gt; for <a class='struct' href='nix/sys/quota/quota/struct.QuotaValidFlags.html' title='nix::sys::quota::quota::QuotaValidFlags'>QuotaValidFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='nix/sys/statvfs/vfs/struct.FsFlags.html' title='nix::sys::statvfs::vfs::FsFlags'>FsFlags</a>&gt; for <a class='struct' href='nix/sys/statvfs/vfs/struct.FsFlags.html' title='nix::sys::statvfs::vfs::FsFlags'>FsFlags</a>",];implementors["serde"] = ["impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;K,&nbsp;V&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>K, V<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K,&nbsp;V&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a,&nbsp;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;",];implementors["ketos"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a><a class='struct' href='ketos/name/struct.Name.html' title='ketos::name::Name'>Name</a>, T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='ketos/name/struct.NameMap.html' title='ketos::name::NameMap'>NameMap</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a><a class='struct' href='ketos/name/struct.Name.html' title='ketos::name::Name'>Name</a>, T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='ketos/name/struct.NameMapSlice.html' title='ketos::name::NameMapSlice'>NameMapSlice</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='ketos/name/struct.Name.html' title='ketos::name::Name'>Name</a>&gt; for <a class='struct' href='ketos/name/struct.NameSet.html' title='ketos::name::NameSet'>NameSet</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='ketos/name/struct.Name.html' title='ketos::name::Name'>Name</a>&gt; for <a class='struct' href='ketos/name/struct.NameSetSlice.html' title='ketos::name::NameSetSlice'>NameSetSlice</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()