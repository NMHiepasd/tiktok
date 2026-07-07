const accounts = [
    {
        id: 1,
        nickname: 'zoe.doe',
        full_name: 'Zoe Doe',
        avatar: 'https://i.pravatar.cc/150?img=1',
        tick: true,
        followers_count: 3800000,
    },
    {
        id: 2,
        nickname: 'kai.tran',
        full_name: 'Kai Tran',
        avatar: 'https://i.pravatar.cc/150?img=12',
        tick: true,
        followers_count: 1200000,
    },
    {
        id: 3,
        nickname: 'linh.nguyen',
        full_name: 'Linh Nguyen',
        avatar: 'https://i.pravatar.cc/150?img=32',
        tick: false,
        followers_count: 452000,
    },
    {
        id: 4,
        nickname: 'minh.dev',
        full_name: 'Minh Dev',
        avatar: 'https://i.pravatar.cc/150?img=45',
        tick: true,
        followers_count: 980000,
    },
    {
        id: 5,
        nickname: 'anna.k',
        full_name: 'Anna K',
        avatar: 'https://i.pravatar.cc/150?img=47',
        tick: false,
        followers_count: 210000,
    },
    {
        id: 6,
        nickname: 'huy.pham',
        full_name: 'Huy Pham',
        avatar: 'https://i.pravatar.cc/150?img=15',
        tick: true,
        followers_count: 640000,
    },
];

const videos = [
    {
        id: 101,
        user: accounts[0],
        description: 'Buổi sáng chill với một cốc cà phê ☕ #chill #morning',
        music: 'nhạc nền - Zoe Doe',
        views_count: 1520000,
        likes_count: 342000,
        comments_count: 4210,
        shares_count: 1890,
        video_url:
            'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        thumb_url: 'https://picsum.photos/seed/video101/300/533',
    },
    {
        id: 102,
        user: accounts[1],
        description: 'Thử thách 24h không dùng điện thoại, kết quả bất ngờ 😱',
        music: 'nhạc nền - Kai Tran',
        views_count: 890000,
        likes_count: 120500,
        comments_count: 2103,
        shares_count: 980,
        video_url:
            'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4',
        thumb_url: 'https://picsum.photos/seed/video102/300/533',
    },
    {
        id: 103,
        user: accounts[2],
        description: 'Mẹo nấu ăn nhanh cho người bận rộn 🍳 #cooking #tips',
        music: 'nhạc nền - Linh Nguyen',
        views_count: 430000,
        likes_count: 65400,
        comments_count: 980,
        shares_count: 410,
        video_url:
            'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        thumb_url: 'https://picsum.photos/seed/video103/300/533',
    },
    {
        id: 104,
        user: accounts[3],
        description: 'Review bàn phím cơ mới nhất 2026 ⌨️ #tech #review',
        music: 'nhạc nền - Minh Dev',
        views_count: 210000,
        likes_count: 38900,
        comments_count: 512,
        shares_count: 220,
        video_url:
            'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4',
        thumb_url: 'https://picsum.photos/seed/video104/300/533',
    },
    {
        id: 105,
        user: accounts[4],
        description: 'Outfit mùa hè năng động ☀️ #ootd #fashion',
        music: 'nhạc nền - Anna K',
        views_count: 675000,
        likes_count: 98200,
        comments_count: 1340,
        shares_count: 760,
        video_url:
            'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        thumb_url: 'https://picsum.photos/seed/video105/300/533',
    },
];

const liveRooms = [
    {
        id: 201,
        user: accounts[0],
        title: 'Trò chuyện cuối tuần cùng mọi người',
        viewers_count: 12500,
        thumb_url: 'https://picsum.photos/seed/live201/300/400',
    },
    {
        id: 202,
        user: accounts[5],
        title: 'Chơi game giải trí buổi tối',
        viewers_count: 8420,
        thumb_url: 'https://picsum.photos/seed/live202/300/400',
    },
    {
        id: 203,
        user: accounts[3],
        title: 'Q&A công nghệ - hỏi gì đáp gì',
        viewers_count: 3210,
        thumb_url: 'https://picsum.photos/seed/live203/300/400',
    },
    {
        id: 204,
        user: accounts[2],
        title: 'Nấu ăn trực tiếp - món Á',
        viewers_count: 5600,
        thumb_url: 'https://picsum.photos/seed/live204/300/400',
    },
];

const searchAccounts = accounts.slice(0, 5).map((acc) => ({
    ...acc,
    bio: 'Chào mừng bạn đến với kênh của tôi ✨',
}));

export { accounts, videos, liveRooms, searchAccounts };
