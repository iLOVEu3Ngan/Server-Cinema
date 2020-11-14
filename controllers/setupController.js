const Supports = require("../models/supportModel");
const Theaters = require("../models/theaterModel");
const Promotions = require("../models/promotionModel");
const Reviews = require("../models/reviewModel");
const Users = require("../models/userModel");
const Tickets = require("../models/ticketModel");
const FoodCombo = require("../models/foodComboModel");
const Movies = require("../models/movieModel");
const Bookings = require("../models/bookingModel");

module.exports = (app) => {
  //-------------------------------------------------------------------
  //Data Setup supports
  app.get("/api/setupSupports", (req, res) => {
    const seedSupports = [
      {
        title:
          "Tôi có thể dùng tài khoản thành viên của mình để mua vé nhóm được không?",
        content: [
          "Bạn có thể cung cấp mã barcode trên mobile app/thẻ thành viên trong quá trình giao dịch mua vé nhóm để được tích điểm bạn nhé, tuy nhiên mỗi tài khoản chỉ áp dụng giá vé thành viên tối đa 8 vé/ngày bạn nhé.",
        ],
      },
      {
        title: "Làm sao để khiếu nại hoặc góp ý với Galaxy?",
        content: [
          "Khi có bất kỳ khiếu nại, hoặc vấn đề phát sinh với dịch vụ của Galaxy Cinema, quý khách vui lòng gọi hotline 19002224 hoặc gửi thông tin đến email: hotro@galaxy.com.vn hoặc gửi tin nhắn đến fanpage Facebook chính thức của Galaxy Cinema tại địa chỉ: https://facebook.com/galaxycine.vn ",
        ],
      },
      {
        title:
          "Thanh toán online đã bị trừ tiền nhưng không nhận được mã đặt vé?",
        content: [
          "Bạn có thể inbox qua fanpage Facebook chính thức của Galaxy Cinema tại địa chỉ https://facebook.com/galaxycine.vn hoặc liên hệ với hotline 19002224 để được hỗ trợ bạn nhé (Thời gian làm việc từ 8:00 đến 22:00 hàng ngày)",
          "Cập nhật lại thời gian của thẻ ATM từ 7 đến 15 ngày làm việc, thẻ Visa/Master từ 7 đến 45 ngày làm việc (không tính Cuối tuần và Ngày Lễ)",
        ],
      },
      {
        title: "Thẻ thành viên Star/G-Star/X-Star có hết hạn sử dụng không?",
        content: [
          " Sau khi đăng ký tài khoản thành viên, điểm tích lũy của bạn (Star) sẽ được sử dụng trong năm (tính từ ngày 01/01/2020 đến 31/12/2020), sau thời gian 01 năm, điểm tích lũy (Star) sẽ trừ khỏi tài khoản thành viên",
        ],
      },
      {
        title: "Làm thế nào để duy trì hạn mức G-Star/X-Star?",
        content: [
          "Đối với hạng mức G-Star: bạn cần chi tiêu từ 2,000,000 VND đến 3,999,999 VND (tính từ ngày 01/01/2020 đến 31/12/2020)",
          "Đối với hạng mức X-Star: bạn cần chi tiêu từ 4,000,000 VND trở lên (tính từ ngày 01/01/2010 đến 31/12/2020)",
        ],
      },
      {
        title: "Công dụng của thẻ thành viên Star/G-Star/X-Star?",
        content: [
          " Xuất trình barcode trên mobile app/thẻ thành viên tại rạp hoặc đăng nhập tài khoản thành viên khi mua vé online để được áp dụng giá vé thành viên.",
          " Xuất trình barcode trên mobile app/thẻ thành viên khi giao dịch tại rạp hoặc đăng nhập tài khoản khi mua vé online, bạn sẽ nhận được số điểm tích lũy tương ứng với số tiền chi tiêu. Điểm thưởng này dùng để đổi các phần quà từ Galaxy. Bên cạnh, khi bạn cung cấp thông tin thành viên tại quầy bắp nước sẽ được giảm giá theo hạng mức của tài khoản thành viên.",
          " Ngoài ra, với lịch sử giao dịch của bạn sẽ giúp Galaxy có cơ hội hiểu rõ hơn về bạn và từ đó chúng tôi sẽ đưa ra được các chương trình khuyến mãi phù hợp và gửi đến bạn những thông tin các bộ phim bạn yêu thích.",
        ],
      },
      {
        title: "Làm thế nào để tích lũy Stars?",
        content: [
          " Với mỗi 10.000VND khi chi tiêu tại Galaxy bạn sẽ tích lũy tương ứng với 1 Star trong tài khoản thành viên của bạn. Bạn vui lòng xuất trình tài khoản thành viên tại rạp hoạc đăng nhập tài khoản trên Web/App của Galaxy khi tiến hành giao dịch bạn nhé.",
        ],
      },
      {
        title:
          "Trường hợp để kiểm tra số lượng Stars trong tài khoản, tôi phải liên hệ ai?",
        content: [
          " Bạn vui lòng gọi hotline 19002224 hoặc gửi thông tin đến email: hotro@galaxy.com.vn hoặc gửi tin nhắn đến fanpage Facebook chính thức của Galaxy Cinema tại địa chỉ: https://facebook.com/galaxycine.vn cung cấp mã thẻ thành viên/SĐT tài khoản để được hỗ trợ bạn nhé.",
          " Bên cạnh bạn cũng có thể đăng nhập tài khoản thành viên tại Web/App của Galaxy, vào mục Tài khoản -> Giao dịch để kiểm tra số Star và lịch sử giao dịch.",
        ],
      },
      {
        title:
          "Trường hợp tôi có nhiều tài khoản thành viên, tôi có thể tích các Star vào 1 tài khoản không?",
        content: [
          " Số Star của mỗi tài khoản sẽ không được tích gộp vào 1 tài khoản bạn nhé.",
        ],
      },
      {
        title: "Thẻ thành viên Star/G-Star/X-Star có hết hạn sử dụng không?",
        content: [
          " Sau khi đăng ký tài khoản thành viên, điểm tích lũy của bạn (Star) sẽ được sử dụng trong năm (tính từ ngày 01/01/2020 đến 31/12/2020), sau thời gian 01 năm, điểm tích lũy (Star) sẽ trừ khỏi tài khoản thành viên. ",
        ],
      },
      {
        title: "Làm thế nào để duy trì hạn mức G-Star/X-Star?",
        content: [
          " Đối với hạng mức G-Star: bạn cần chi tiêu từ 2,000,000 VND đến 3,999,999 VND (tính từ ngày 01/01/2020 đến 31/12/2020). ",
          " Đối với hạng mức X-Star: bạn cần chi tiêu từ 4,000,000 VND trở lên (tính từ ngày 01/01/2010 đến 31/12/2020). ",
        ],
      },
    ];

    Supports.create(seedSupports, (err, results) => {
      res.send(results);
    });
  });

  //-------------------------------------------------------------------
  //Data Setup Reviews Movies
  app.get("/api/setupReviewMovies", (req, res) => {
    const seedRivews = [
      {
        title: "[Review] Bloodshot: Vin Diesel Và Giấc Mơ Siêu Anh Hùng",
        image:
          "https://www.galaxycine.vn/media/2020/3/12/unnamed_1584006435812.jpg",
        content:
          "Dù hóa thân thành Groot trong Guardians Of The Galaxy là siêu anh hùng nhưng Vin Diesel chỉ lồng tiếng chứ chẳng đóng một cảnh giải cứu thế giới nào cả.",
        vote: {
          rate: "7.35",
          numberOfReviews: "52",
        },
      },
      {
        title:
          "[Review] Onward: Lộ Diện Ứng Viên Đầu Tiên Cho Oscar Hoạt Hình 2021?",
        image:
          "https://www.galaxycine.vn/media/2020/3/4/mv5bmwmzzwiyzgmtzwe2ms00njfilwe4otutmmrizde2m2zkmzq3xkeyxkfqcgdeqxvyndg4njy5otq--v1-sx1777-cr0-0-1777-744-al-_1583313777077.jpg",
        content:
          "Pixar luôn là Pixar. Dù rất nhiều ý kiến cho rằng việc về dưới trướng Disney khiến hãng phim hoạt hình dần mai một, đánh mất chính mình thì theo thời gian, họ tiếp tục ra mắt những phim hay “để đời”. Năm 2020, Onward lần nữa chứng minh rằng, Pixar vẫn luôn xuất sắc.",
        vote: {
          rate: "7.44",
          numberOfReviews: "41",
        },
      },
      {
        title: "Phía Sau Màn Ảnh: Khi Sao Hollywood Hy Sinh Vì Nghệ Thuật",
        image:
          "https://www.galaxycine.vn/media/2020/4/27/450_1587982051894.jpg",
        content:
          "Để các bộ phim được hoàn hảo, các diễn viên Hollywood không ngần ngại hy sinh, thể hiện nhân vật theo cách chân thật nhất có thể.",
        vote: {
          rate: "7.56",
          numberOfReviews: "41",
        },
      },
      {
        title: "[Preview] A Quiet Place 2: Hé Lộ Bí Mật Hậu Tận Thế?",
        image:
          "https://www.galaxycine.vn/media/2020/2/21/mv5bodqxmmnhnjytmzk3yi00nzdmltk1ywqtnjvhytkzyzm3zwu4xkeyxkfqcgdeqxvynjczote0mzm--v1-_1582261927882.jpg",
        content:
          "90 phút căng như dây đàn của A Quiet Place giúp nhà sản xuất kiếm cả núi tiền từ kinh phí chỉ 17 triệu $. Bộ phim đã tạo cơn sốt trên toàn thế giới, thu về hơn 340 triệu $ và nhanh chóng được hãng phim lên kế hoạch ra mắt phần tiếp theo.",
        vote: {
          rate: "7.5",
          numberOfReviews: "40",
        },
      },
    ];

    Reviews.create(seedRivews, (err, results) => {
      res.send(results);
    });
  });

  //-------------------------------------------------------------------
  //Data Setup Promotions
  app.get("/api/setupPromotions", (req, res) => {
    const seedPromotions = [
      {
        links: "tung-bung-hai-sao--nhan-uu-dai-khung",
        title:
          "Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng",
        image:
          "https://www.galaxycine.vn/media/2020/2/27/1135x660_1582773509378.jpg",
        imagePro:
          "https://www.galaxycine.vn/media/2019/12/9/300x450_1575874237175.jpg",
        content: [
          "Vậy là, ngày 02/03/2020, các Stars sẽ được xem phim thả ga với giá vé đồng nhất 45.000 đ cho tất cả các phim 2D. Ngoài ra, trong Ngày Tri Ân này, khách hàng còn được nhận một ưu đãi đặc biệt - thoải mái thưởng thức bắp nước khi được 01 lần Refill miễn phí với tất cả các phần bắp và nước ngọt dạng ly (Pepsi, 7Up, Mirinda Cam/Mirinda Sarsi), Lipton Trà Chanh 22oz và Combo đang bán tại rạp.",
          " Đừng bỏ lỡ Ngày Tri Ân tại Galaxy Cinema  - Ngày thứ Hai ĐẦU TIÊN của mỗi tháng. Với Ngày Tri Ân, các Stars chắc chắn sẽ có thêm nhiều trải nghiệm tuyệt vời và một buổi xem phim thú vị tại Galaxy Cinema.",
        ],
      },
      {
        links:
          "ngay-tri-an-cua-galaxy-cinema---ngay-thu-hai-dau-tien-moi-thang",
        title:
          "Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng",
        image:
          "https://www.galaxycine.vn/media/2020/2/27/1135x660_1582773509378.jpg",
        imagePro:
          "https://www.galaxycine.vn/media/2020/2/27/300x450_1582773542863.jpg",
        content: [
          "Vậy là, ngày 02/03/2020, các Stars sẽ được xem phim thả ga với giá vé đồng nhất 45.000 đ cho tất cả các phim 2D. Ngoài ra, trong Ngày Tri Ân này, khách hàng còn được nhận một ưu đãi đặc biệt - thoải mái thưởng thức bắp nước khi được 01 lần Refill miễn phí với tất cả các phần bắp và nước ngọt dạng ly (Pepsi, 7Up, Mirinda Cam/Mirinda Sarsi), Lipton Trà Chanh 22oz và Combo đang bán tại rạp.",
          " Đừng bỏ lỡ Ngày Tri Ân tại Galaxy Cinema  - Ngày thứ Hai ĐẦU TIÊN của mỗi tháng. Với Ngày Tri Ân, các Stars chắc chắn sẽ có thêm nhiều trải nghiệm tuyệt vời và một buổi xem phim thú vị tại Galaxy Cinema.",
        ],
      },
      {
        links: "bat-kip-thoi-dai-40-bye-bye-the-thanh-vien-nhua",
        title:
          "Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng",
        image:
          "https://www.galaxycine.vn/media/2020/2/27/1135x660_1582773509378.jpg",
        imagePro:
          "https://www.galaxycine.vn/media/2019/10/11/300x450_1570766652733.jpg",
        content: [
          "Vậy là, ngày 02/03/2020, các Stars sẽ được xem phim thả ga với giá vé đồng nhất 45.000 đ cho tất cả các phim 2D. Ngoài ra, trong Ngày Tri Ân này, khách hàng còn được nhận một ưu đãi đặc biệt - thoải mái thưởng thức bắp nước khi được 01 lần Refill miễn phí với tất cả các phần bắp và nước ngọt dạng ly (Pepsi, 7Up, Mirinda Cam/Mirinda Sarsi), Lipton Trà Chanh 22oz và Combo đang bán tại rạp.",
          " Đừng bỏ lỡ Ngày Tri Ân tại Galaxy Cinema  - Ngày thứ Hai ĐẦU TIÊN của mỗi tháng. Với Ngày Tri Ân, các Stars chắc chắn sẽ có thêm nhiều trải nghiệm tuyệt vời và một buổi xem phim thú vị tại Galaxy Cinema.",
        ],
      },
      {
        links: "dat-ve-online-khong-lo-tre-nai",
        title:
          "Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng",
        image:
          "https://www.galaxycine.vn/media/2020/2/27/1135x660_1582773509378.jpg",
        imagePro:
          "https://www.galaxycine.vn/media/2019/9/30/300x450-80-1569464713921_1569830041346.jpg",
        content: [
          "Vậy là, ngày 02/03/2020, các Stars sẽ được xem phim thả ga với giá vé đồng nhất 45.000 đ cho tất cả các phim 2D. Ngoài ra, trong Ngày Tri Ân này, khách hàng còn được nhận một ưu đãi đặc biệt - thoải mái thưởng thức bắp nước khi được 01 lần Refill miễn phí với tất cả các phần bắp và nước ngọt dạng ly (Pepsi, 7Up, Mirinda Cam/Mirinda Sarsi), Lipton Trà Chanh 22oz và Combo đang bán tại rạp.",
          " Đừng bỏ lỡ Ngày Tri Ân tại Galaxy Cinema  - Ngày thứ Hai ĐẦU TIÊN của mỗi tháng. Với Ngày Tri Ân, các Stars chắc chắn sẽ có thêm nhiều trải nghiệm tuyệt vời và một buổi xem phim thú vị tại Galaxy Cinema.",
        ],
      },
    ];

    Promotions.create(seedPromotions, (err, results) => {
      res.send(results);
    });
  });

  //-------------------------------------------------------------------
  //Data Setup Theaters
  app.get("/api/setupTheaters", (req, res) => {
    const seedTheaters = [
      {
        ticket2d:
          "https://galaxycine.vn/media/2019/8/30/banggiave-cm-082019-2d_1567135206319.jpg",
        ticket3d:
          "https://www.galaxycine.vn/media/2019/8/30/banggiave-082019-3d_1567135215938.jpg",
        address: "Lầu 2 Sense City, số 9, Trần Hưng Đạo, P.5, Tp. Cà Mau",
        phone: "1900 1302",
        addressMap:
          "https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France",
      },
    ];

    Theaters.create(seedTheaters, (err, results) => {
      res.send(results);
    });
  });

  //-------------------------------------------------------------------
  //Data Setup Tickets
  app.get("/api/setupTickets", (req, res) => {
    const seedTickets = [
      {
        name: "Ve 2D thanh vien",
        des: "Vé 2D cho khách thành viên",
        price: 50000,
      },
      {
        name: "Nguoi lon",
        des: "Vé 2D",
        price: 60000,
      },
    ];

    Tickets.create(seedTickets, (err, results) => {
      res.send(results);
    });
  });

  //-------------------------------------------------------------------
  //Data Setup Users
  app.get("/api/setupUsers", (req, res) => {
    const seedUsers = [
      {
        userName: "Nguyễn Bữuuuuu",
        email: "nguyenbuubkdn@gmail.com",
        phone: "0357175762",
        gender: "Nam",
        birth: "1999-05-13",
        password: "nguyenbuu99",
        address: "856/34 Tôn Đức Thắng",
        currentStar: 100,
        targets: "12",
        role: "user",
      },
      {
        userName: "RHYdsd",
        email: "nguyenbuu3599@gmail.com",
        phone: "1212121212",
        gender: "Nam",
        birth: "1999-12-12",
        password: "nguyenbuu12",
        address: "121212",
        currentStar: "120",
        targets: 0,
        role: "user",
      },
      {
        userName: "RHYdsdáaa",
        email: "nguyenbuupro@gmail.com",
        phone: "1212121212",
        gender: "Nam",
        birth: "1999-12-12",
        password: "nguyenbuu99",
        address: "121212",
        currentStar: "120",
        targets: 0,
        role: "admin",
      },
    ];

    Users.create(seedUsers, (err, results) => {
      res.send(results);
    });
  });

  //-------------------------------------------------------------------
  //Data Setup FoodCombo
  app.get("/api/setupFoodCombo", (req, res) => {
    const seedFoodCombo = [
      {
        name: "Combo 1 big",
        des: "1 Bắp (Ngọt/ mặn) + 1 nước(PEPSI/ 7UP/ MIRINDA)",
        price: 65000,
      },
      {
        name: "Combo 2 small",
        des: "1 Bắp (Ngọt/ mặn) + 2 nước(PEPSI/ 7UP/ MIRINDA)",
        price: 81000,
      },
      {
        name: "Combo 3 big",
        des: "2 Bắp (Ngọt/ mặn) + 2 nước(PEPSI/ 7UP/ MIRINDA)",
        price: 107000,
      },
    ];

    FoodCombo.create(seedFoodCombo, (err, results) => {
      res.send(results);
    });
  });

  //-------------------------------------------------------------------
  //Data Setup Movies
  app.get("/api/setupMovies", (req, res) => {
    const seedMovies = [
      {
        name: "Nắng 3: lời hứa của cha",
        slug: "nang-3-loi-hua-cua-cha",
        intro:
          "Cuộc sống của một bà mẹ đơn thân cùng đứa con gái nhỏ thêm phần thú vị khi có sự xuất hiện của một người đàn ông lịch lãm, kế hoạch tìm chồng, tìm cha từ đây bắt đầu",
        type: "Hài, Tình cảm , Gia đình",
        author: "Đồng Đăng Giao",
        actor: "Khả Như, Kiều Minh Tuấn",
        time: "105 minutes",
        nation: "Việt Nam",
        premiereDate: "05/15/2020",
        price: "75000",
        image:
          "https://www.galaxycine.vn/media/2020/2/25/450x300_1582597508575.jpg",
        imageInfo:
          "https://www.galaxycine.vn/media/2020/2/26/nang-3---poster-khong-logo_1582692152072.jpg",
        video: "https://www.youtube.com/embed/DymKqNH_m8w?autoplay=1",
        vote: {
          rate: "6.34",
          numberOfReviews: "81",
        },
        date: [
          {
            dateMovie: "05/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "05/16/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "05/17/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
        ],
      },
      {
        name: "Onward: Truy Tìm Phép Thuật",
        slug: "onward-truy-tim-phep-thuat",
        intro:
          "Lấy bối cảnh vùng ngoại ô một thế giới kỳ ảo, hai anh em yêu tinh tuổi teen bắt đầu hành trình khám phá xem, liệu rằng đâu đó ngoài kia có còn tồn tại ma thuật không?",
        type: "Hoạt Hình",
        author: "Dan Scanlon",
        actor: "Tom Holland, Chris Pratt",
        time: "105 minute",
        nation: "Mỹ",
        premiereDate: "05/15/2020",
        price: "75000",
        image:
          "https://galaxycine.vn/media/2020/2/24/450x300_1582529315801.jpg",
        imageInfo:
          "https://www.galaxycine.vn/media/2020/1/16/poster-onward-official_1579158439704.jpg",
        video: "https://www.youtube.com/embed/UCfgXvSzllA?autoplay=1",
        vote: {
          rate: "7.47",
          numberOfReviews: "46",
        },
        date: [
          {
            dateMovie: "05/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "11:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "19:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "05/16/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "05/17/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
        ],
      },
      {
        name: "Ác mộng bên hồ",
        slug: "ac-mong-ben-ho",
        intro:
          "Một nhóm bạn đi nghỉ dưỡng tại ngôi nhà bên hồ, tuy nhiên cuộc vui đã trở nên kinh hoàng khi có người bị sát hại. Thế lực bí ẩn dưới đáy hồ thực sự là gì?",
        type: "Kinh dị, tâm lý",
        author: "Quang Huy",
        actor: "Patrick Walshe McBride, Iben Akerlie",
        time: "105 minute",
        nation: "Na Uy",
        premiereDate: "05/15/2020",
        price: "75000",
        image:
          "https://galaxycine.vn/media/2020/2/27/450x300_1582775198057.jpg",
        imageInfo:
          "https://www.galaxycine.vn/media/2020/2/27/300x450-1_1582775190404.jpg",
        video: "https://www.youtube.com/embed/VWjlmdhvCy0?autoplay=1",
        vote: {
          rate: "7.5",
          numberOfReviews: "40",
        },
        date: [
          {
            dateMovie: "05/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "05/16/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "06/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
        ],
      },
      {
        name: "Căn Hộ Của Quỷ",
        slug: "can-ho-cua-quy",
        intro:
          "Phim là câu chuyện có thật về gia đình bị ma ám tại vùng Madrid khi họ chuyển đến căn nhà mới, các thế lực đen tối tại đây đã gây nỗi ám ảnh kinh hoàng cho họ.",
        type: "Kinh dị",
        author: "Albert Pintó",
        actor: "Begoña Vargas , Iván Marcos",
        time: "105 minute",
        nation: "Italia",
        premiereDate: "05/15/2020",
        price: "75000",
        image:
          "https://galaxycine.vn/media/2020/2/24/450x300-32_1582530414160.jpg",
        imageInfo:
          "https://www.galaxycine.vn/media/2020/2/24/300x450-32_1582530404329.jpg",
        video: "https://www.youtube.com/embed/5b4RLQssyuc?autoplay=1",
        vote: {
          rate: "7.5",
          numberOfReviews: "40",
        },
        date: [
          {
            dateMovie: "07/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "06/16/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "06/17/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
        ],
      },
      {
        name: "The Invisible Man: Kẻ Vô Hình",
        slug: "the-invisible-ke-vo-hinh",
        intro:
          "Một cô gái đang bị truy sát bởi một tên ác nhân mà cô không thể nhìn thấy. Mục đích của kẻ vô hình này là gì? Hắn có liên hệ ra sao với cô gái kia? Đón xem!",
        type: "Kinh dị, ly kì, giả tưởng",
        author: "Quang Huy",
        actor: "Elisabeth Moss, Oliver Jackson-Cohen",
        time: "105 minute",
        nation: "Mỹ",
        premiereDate: "05/15/2020",
        price: "75000",
        image:
          "https://galaxycine.vn/media/2020/2/19/450x300_1582096375218.jpg",
        imageInfo:
          "https://www.galaxycine.vn/media/2020/2/20/300x450-cuoc-xe_1582172116913.jpg",
        video: "https://www.youtube.com/embed/EAqCXCSraJ4?autoplay=1",
        vote: {
          rate: "7.5",
          numberOfReviews: "40",
        },
        date: [
          {
            dateMovie: "05/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "07/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "08/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
        ],
      },
      {
        name: "Cuốc Xe Nửa Đêm",
        slug: "cuoc-xe-nua-dem",
        intro:
          "Hoàng Yến Chibi trở lại điện ảnh với vai công nàng xe ôm với vai Thư, cô gặp Sỹ (do diễn viên Quách Ngọc Tuyên thủ vai) trong một dịp tình cờ. Sau đấy cả hai yêu nhau, tuy nhiên dường như Thư và Sỹ đều có sự liên quan đến những nhân vật trong thế giới ngầm đầy đen tối. Liệu số phận của họ sẽ đi đến đâu?",
        type: "Hành động, tâm lý",
        author: "Nguyễn Nguyên Hoàng",
        actor: "Hoàng Yến Chibi, Quách Ngọc Tuyên",
        time: "105 minute",
        nation: "Việt Nam",
        premiereDate: "05/15/2020",
        price: "75000",
        image:
          "https://galaxycine.vn/media/2020/2/20/450x300-cuoc-xe_1582172123848.jpg",
        imageInfo:
          "https://www.galaxycine.vn/media/2020/2/20/300x450-cuoc-xe_1582172116913.jpg",
        video: "https://www.youtube.com/embed/UCfgXvSzllA?autoplay=1",
        vote: {
          rate: "7.5",
          numberOfReviews: "40",
        },
        date: [
          {
            dateMovie: "05/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "05/16/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "05/17/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
        ],
      },
      {
        name: "Nắng 4: lời hứa của cha",
        slug: "nang-4-loi-hua-cua-cha",
        intro:
          "Cuộc sống của một bà mẹ đơn thân cùng đứa con gái nhỏ thêm phần thú vị khi có sự xuất hiện của một người đàn ông lịch lãm, kế hoạch tìm chồng, tìm cha từ đây bắt đầu",
        type: "Hài, Tình cảm , Gia đình",
        author: "Đồng Đăng Giao",
        actor: "Khả Như , Kiều Minh Tuấn",
        time: "105 minutes",
        nation: "Việt Name",
        premiereDate: "05/15/2020",
        price: "75000",
        image:
          "https://www.galaxycine.vn/media/2020/2/25/450x300_1582597508575.jpg",
        imageInfo:
          "https://www.galaxycine.vn/media/2020/2/20/300x450-cuoc-xe_1582172116913.jpg",
        video: "https://www.youtube.com/embed/EAqCXCSraJ4?autoplay=1",
        vote: {
          rate: "7.5",
          numberOfReviews: "40",
        },
        date: [
          {
            dateMovie: "05/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "06/15/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
          {
            dateMovie: "05/17/2020",
            frameTime: [
              {
                room: "Room 1",
                time: "08:00",
              },
              {
                room: "Room 2",
                time: "13:00",
              },
              {
                room: "Room 3",
                time: "15:00",
              },
              {
                room: "Room 4",
                time: "17:00",
              },
              {
                room: "Room 5",
                time: "22:00",
              },
            ],
          },
        ],
      },
    ];

    Movies.create(seedMovies, (err, results) => {
      res.send(results);
    });
  });

  //-------------------------------------------------------------------
  //Data Setup Bookings
  app.get("/api/setupBookings", (req, res) => {
    const seedBookings = [
      {
        idUser: "5fa90c4595d4443a048abba9",
        idMovie: "5fa40b4b7786ad30349b031b",
        room: "Room 1",
        nameMovie: "Onward: Truy Tìm Phép Thuật",
        date: "05/16/2020",
        time: "08:00",
        seats: ["E6", "E7"],
        ticketPrice: 110000,
        foodPrice: 65000,
        tickCode: "HnOCHbbk",
      },
    ];

    Bookings.create(seedBookings, (err, results) => {
      res.send(results);
    });
  });
};
