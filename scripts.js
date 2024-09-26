/* Place your JavaScript in this file */
{
    const main = document.querySelector(".ok")
    const container = document.querySelector(".container")
    const user = document.querySelector(".user")
    const pass = document.querySelector(".pass")
    const logBtn = document.querySelector("button")
    const show = document.querySelector(".show")
    const img = document.querySelector("img")

    const canvas = document.querySelector('.can2');
    const ctx = canvas.getContext("2d");

    let cw = canvas.width = window.innerWidth;
    let ch = canvas.height = window.innerHeight;

    class Tuyet {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 2;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 + 1;
            this.rotation = 0;
            this.rotationSpeed = Math.random() * 0.2 - 0.05; // tốc độ xoay ngẫu nhiên
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;

            if (this.size > 0.2) this.size -= 0.034;

            if (this.y > canvas.height) {
                this.y = 0;
                this.size = Math.random() * 5 + 2;
            }

            if (this.x > canvas.width || this.x < 0) {
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            const starSize = this.size * 3.5; // tăng kích thước ngôi sao lên gấp đôi
            const halfSize = starSize * 0.5;
            const theta = Math.PI / 2 + this.rotation; // thêm góc quay vào

            ctx.beginPath();
            ctx.moveTo(this.x + starSize * Math.cos(theta), this.y + starSize * Math.sin(theta));
            for (let i = 1; i <= 10; i++) {
                const r = i % 2 === 0 ? halfSize : starSize;
                ctx.lineTo(this.x + r * Math.cos(theta + i * Math.PI / 5), this.y + r * Math.sin(theta + i * Math.PI / 5));
            }
            ctx.fillStyle = "yellow";
            ctx.fill();
        }

    }

    const tuyetArray = [];

    for (let i = 0; i < 150; i++) {
        tuyetArray.push(new Tuyet());
    }

    function animate() {
        ctx.clearRect(0, 0, cw, ch);

        for (let i = 0; i < tuyetArray.length; i++) {
            tuyetArray[i].update();
            tuyetArray[i].draw();
        }
        requestAnimationFrame(animate);
    }


    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });


    let num = 0
    let textArray = [
        "Chào mầy, đồ hăm :333",
        "Tặng mầy bông hoa nhè :3",
        "Lại đây nói nhỏ cái lày ^.^",
        "Biết hôm nay ngày gì không",
        "Ngày mà thế giới lày có thêm một nàng công chúa siuu dễ thương đéy hí hí >.<",
        "Nào nào",
        'Tui thấy ai đó đang ngồi vẽ nè! Trời ơi tay đẹp ghê luôn í >.<  Ahhhh',
        //7
        'Tóc mới của mầy đẹp ghê henn 😍',
        'Hôm nay 24/5 ;)))))',
        'Tao chúc mày sớm đạt được ước mơ của mình 😍',
        //10
        'Và...',
        '..........',
        'Bớt hỗn lại nge mầy -.-',
        'Với lại...',
        'Tau có máy lạnh ròi, tau không cần sự lạnh lùng của mầy đâuu ;)))',
        //15
        'Mày sắp thành người lớn ròi đó',
        //16
        'Chuyện cũ bỏ qua đê ;))))',
        //17
        'Không có chơi lóc fb nữa ;))))))',
        'À còn nữa',
        'Tao thấy mày thức khuya hoài -.-',
        //20
        'Còn mà ngủ không được thì alo "làm phiền" tao đi nha ;)))))))))',
        'Sđt đây:',
        '0123456789 :>',
        //23
        'Không lan man nữa',
        'Tuổi mới chúc Clinh ngày càng:',
        'Xynh đệp ✨✨',
        //26
        'Hộc dỏi 📗📗',
        //27
        'Và... ❤️💕',
        'Ế dài dài nhaaaa :>>>>>',
        // 29
        'Những lời tâm tình',
        'Tới đây là hết òi :>>',
        'Tạm piệt',
        '.......',
        '.....................',
        'Còn tò mò muốn xem tiếp saooo',
        'Được thoi',
        'Tặng cậu',
        "❤️❤️❤️❤️❤️"
        //37
    ]
    const changeImg = (number) => {
        switch (number) {
            case 2:
                img.style.display = "block"
                img.setAttribute("src", "https://thuthuatnhanh.com/wp-content/uploads/2022/06/hinh-anh-ma-cute-347x580.jpg");
                img.style.height = "80%"

                break;
            case 3:
                img.style.display = "block"
                img.style.height = "80%"
                img.setAttribute("src", "https://bookvexe.vn/wp-content/uploads/2023/04/tong-hop-25-hinh-anh-avatar-meo-cute-cho-instagram-va-facebook_2.jpg")
                break;
            case 4:
                img.style.display = "block"
                img.style.height = "70%"
                img.setAttribute("src", "https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-ve-cute-pho-mai-que.jpg")
                break;
            case 5:
                img.style.display = "block"
                img.style.height = "70%"
                img.setAttribute("src", "https://inkythuatso.com/uploads/thumbnails/800/2022/05/anh-meo-cute-nhat-37-12-14-19-25.jpg")
                break;
            case 6:
                img.setAttribute("src", "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-anh-nho-cute.jpg")
                img.style.display = "block"
                img.style.height = "75%"
                break;
            case 7:
                img.setAttribute("src", "https://drive.google.com/uc?export=view&id=1Ku4vwU24eqZT3O0IUS4MsJy-eeZRkUxH")
                img.style.display = "block"
                img.style.height = "70%"
                break;
            case 10:
                img.setAttribute("src", "https://toigingiuvedep.vn/wp-content/uploads/2022/04/hinh-anh-uoc-mo.jpg")
                img.style.display = "block"
                img.style.height = "70%"
                break;
            case 15:
                img.setAttribute("src", "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/699a575e-371b-4813-818d-ab7b4c0f6b40")
                img.style.display = "block"
                img.style.height = "70%"
                break;
            case 16:
                img.setAttribute("src", "https://genzrelax.com/wp-content/uploads/2022/03/anh-chibi-cute-8.jpg")
                img.style.display = "block"
                img.style.height = "70%"
                break;
            case 17:
                img.setAttribute("src", "https://genzrelax.com/wp-content/uploads/2022/03/anh-chibi-cute-11.jpg")
                img.style.display = "block"
                img.style.height = "80%"
                break;
            case 20:
                img.setAttribute("src", "https://thuthuatnhanh.com/wp-content/uploads/2019/04/anh-cute.jpg")
                img.style.display = "block"
                img.style.height = "70%"
                break;
            case 23:
                img.setAttribute("src", "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-meo-chibi-uong-sua-dang-yeu-12-14-07-47.jpg")
                img.style.display = "block"
                img.style.height = "80%"
                break;
            case 26:
                img.setAttribute("src", "https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-cartoon-golden-twinkling-stars-png-pattern-image_1349549.jpg")
                img.style.display = "block"
                img.style.height = "70%"
                break;
            case 27:
                img.setAttribute("src", "https://toigingiuvedep.vn/wp-content/uploads/2022/02/hinh-anh-quyet-tam-thi-do.jpg")
                img.style.display = "block"
                img.style.height = "80%"
                break;
            case 29: https://photos.cuahangkhoedep.com/file/chldcdn/v/ve-con-meo-chibi-cute-cach-ve-1001-hinh-ve-don-gian-dep_14.jpg
                img.setAttribute("src", "https://photos.cuahangkhoedep.com/file/chldcdn/v/ve-con-meo-chibi-cute-cach-ve-1001-hinh-ve-don-gian-dep_14.jpg")
                img.style.display = "block"
                img.style.height = "80%"
                break;
            // https://photos.cuahangkhoedep.com/file/chldcdn/v/ve-con-meo-chibi-cute-cach-ve-1001-hinh-ve-don-gian-dep_14.jpg
            // case 29:
            //     img.setAttribute("src", "https://catscanman.net/wp-content/uploads/2021/09/meo-cute-anime-2.jpgs")
            //     img.style.display = "block"
            //     img.style.height = "80%"
            //     break;
            case 37:
                img.setAttribute("src", "https://hutbuicongnghiep.com/wp-content/uploads/2022/02/hinh-meo-cute-10.jpg")
                img.style.display = "block"
                img.style.height = "80%"
                break;
            case 38:
                img.style.display = "none"
                animateHeart()
                moreHeart()
                leftBtn.style.pointerEvents = "none"
                break;
            default:
                img.style.display = "none"
                img.style.height = "70%"
                break;
        }
    }

    const hashString = (string) => {
        let arr = string.split("")
        return arr
    }

    const textarea = document.querySelector(".textarea")
    const textInside = textarea.querySelector("p")
    const page = textarea.querySelector(".pages").querySelector("p")
    const leftBtn = document.querySelector(".left")
    const rightBtn = document.querySelector(".right")
    // let delay = hashString(textArray[0]).length*80
    let delay = 4400
    leftBtn.innerText = "<"
    let interval
    let dec = (number) => {
        if (number !== 0) {
            if (interval) {
                clearInterval(interval)
            }
            changeText(number - 1)
            leftBtn.style.pointerEvents = "none"
            setTimeout(() => {
                leftBtn.style.pointerEvents = "auto"
            }, delay)
            rightBtn.style.pointerEvents = "none"
            setTimeout(() => {
                rightBtn.style.pointerEvents = "auto"
            }, delay)
            return num = number - 1
        }
    }
    let inc = (number) => {
        if (number < textArray.length - 1) {
            if (interval) {
                clearInterval(interval)
            }
            changeText(number + 1)
            rightBtn.style.pointerEvents = "none"
            setTimeout(() => {
                rightBtn.style.pointerEvents = "auto"
            }, delay)
            leftBtn.style.pointerEvents = "none"
            setTimeout(() => {
                leftBtn.style.pointerEvents = "auto"
            }, delay)
            return num = number + 1
        }
    }
    const setDelay = (number) => {

    }
    let next = 0
    let changeText = (num) => {
        function connect(array, number) {
            let text = ""
            for (let i = 0; i <= number; i++) {
                text += array[i]
            }
            return text
        }
        changeImg(num + 1)
        next = 0
        const text = hashString(textArray[num]) //[]
        interval = setInterval(() => {
            textInside.innerText = connect(text, next)
            next += 1
            if (next >= text.length) {
                clearInterval(interval)
            }
        }, 80)
        delay = hashString(textArray[num]).length * 80 + 120

        // textInside.innerText = textArray[num]
        page.innerText = num + 1
        opacity()
    }

    let opacity = () => {
        textarea.classList.add("showText")
        setTimeout(() => {
            textarea.classList.remove("showText")
        }, 1500)
    }

    leftBtn.addEventListener("click", () => dec(num))
    rightBtn.addEventListener("click", () => inc(num))
    const check = () => {
        let value1 = user.value
        let value2 = pass.value
        console.log(value1)
        if (user.value.trim().toLowerCase() === "lơ" && pass.value.trim().toLowerCase() === "lara") {
            if (m === 0) {
                setTimeout(() => {
                    changeText(num)
                }, 3800)
                m++
            }
            document.querySelector("audio").play()
            container.style.animation = "destroy 3.8s 1 linear forwards"
            document.querySelector("medium").innerText = "Chính xác"
            document.querySelector("medium").style.color = "green"
            setTimeout(() => {
                animate()
                container.style.display = "none"
                container.remove()
                show.style.display = "flex"
            }, 3800)
        } else {
            document.querySelector("medium").innerText = "Bị sai gì đó òiii🥺🥺🥺"
        }
    }
    logBtn.addEventListener("click", check)

    // canvas1.addEventListener("mousemove", function (event) {
    //     var x = event.clientX;
    //     var y = event.clientY;
    //     createHeart(x, y);
    // });
    // canvas1.addEventListener("mouseover", function (event) {
    //     var x = event.clientX;
    //     var y = event.clientY;
    //     createHeart(x, y);
    // });
    // canvas.addEventListener("mousemove", function (event) {
    //     var x = event.clientX;
    //     var y = event.clientY;
    //     createHeart(x, y);
    // });
{
    window.addEventListener("mousemove", function (event) {
        var x = event.clientX;
        var y = event.clientY;
        createHeart(x, y);
    });

    window.addEventListener("click", function (event) {
        var x = event.clientX;
        var y = event.clientY;
        createHeart(x, y)
    })

    var canvas1 = document.querySelector('.can');
    var c = canvas1.getContext('2d');

    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas1.width = window.innerWidth;
        canvas1.height = window.innerHeight;
        hearts = [];
        for (var i = 0; i < 50; i++) {
            var x = Math.random() * canvas1.width;
            var y = Math.random() * canvas1.height;
            var size = 30;
            var speed = Math.random() * 2 + 1;
            hearts.push(new Heart(x, y, size, speed));
        }
    });

    var hearts = [];

    function Heart(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.opacity = 1;

        this.draw = function () {
            c.beginPath();
            c.fillStyle = "rgba(255, 43, 47, " + this.opacity + ")";
            c.moveTo(this.x, this.y);
            c.bezierCurveTo(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 2, this.x, this.y + this.size);
            c.bezierCurveTo(this.x + this.size, this.y + this.size / 2, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
            c.fill();
        };

        this.update = function () {
            this.x += this.speed;
            this.y += this.speed / 2;
            this.opacity -= 0.02;

            if (this.opacity < 0) {
                this.opacity = 0;
            }
        };
    }

    function createHeart(x, y) {
        var size = Math.random() * 20 + 10;
        var speed = Math.random() * 2 + 1;
        var heart = new Heart(x, y, size, speed);
        hearts.push(heart);
    }
    function loop() {
        requestAnimationFrame(loop);
        c.clearRect(0, 0, canvas1.width, canvas1.height);

        for (var i = 0; i < hearts.length; i++) {
            hearts[i].draw();
            hearts[i].update();

            if (hearts[i].y > canvas1.height + hearts[i].size || hearts[i].opacity <= 0) {
                hearts.splice(i, 1);
                i--;
            }
        }
    }

    loop();
}
    let heartCanvas = document.querySelector(".heartCanvas");
    let context = heartCanvas.getContext("2d");
    let heartWidth = heartCanvas.width = window.innerWidth
    let heartHeight = heartCanvas.height = window.innerHeight
    let startAngle = 2 //vẽ tròn trái
    let startAngle1 = 1 //vẽ tròn phải
    let radius = 50
    let step = 0
    let speedHeart = 0.015
    let speedLine = 1.6
    let speedLineX
    let speedLineY
    let m = 0
    let lastCoor = {
        x: null,
        y: null
    }
    let nowCoor = {
        x: null,
        y: null
    }
    let defaultCoor = {
        x: null,
        y: null,
    }
    let a = 1


    const drawCircle = (x, y) => {
        context.lineTo(x, y);
        return nowCoor.x = x, nowCoor.y = y
    }
    const drawLine = (x, y) => {
        context.lineTo(x, y)
        return nowCoor.x = x, nowCoor.y = y
    }
    const setLastCoor = (x, y) => {
        return lastCoor.x = x, lastCoor.y = y
    }
    const checkVelocity = (s1, s2, t) => {
        let v = Math.abs((s1 - s2) / t)
        return v
    }

    context.beginPath()
    const drawHeart = () => {
        if (step === 0) {
            var x = heartWidth / 2 - radius + radius * Math.cos(startAngle * (Math.PI));
            var y = heartHeight / 2 - radius + radius * Math.sin(startAngle * (Math.PI));
            if (m === 0) {
                defaultCoor.x = x
                defaultCoor.y = y
                m += 1
            }
            if (startAngle > 0.85) {
                startAngle -= speedHeart
            } else {
                startAngle = 0.85
                step++
            }

            drawCircle(x, y)
        }
        if (step === 1) {
            var x = heartWidth / 2 + radius + radius * Math.cos(startAngle1 * (Math.PI));
            var y = heartHeight / 2 - radius + radius * Math.sin(startAngle1 * (Math.PI));
            if (startAngle1 < 2.15) {
                startAngle1 += speedHeart
            } else {
                setLastCoor(x, y)
                startAngle1 = 2.15
                step++
            }
            drawCircle(x, y)
        }
        if (step === 2) {
            let time = 55
            speedLineX = checkVelocity(lastCoor.x, heartWidth / 2, time)
            speedLineY = checkVelocity(lastCoor.y, heartHeight / 1.8, time)
            let startX = 0
            let startY = 0
            let targetX = heartWidth / 2
            let targetY = heartHeight / 1.8
            if (nowCoor.x > targetX && nowCoor.y < targetY) {
                drawLine(nowCoor.x - speedLineX, nowCoor.y + speedLineY)
            } else {
                drawLine(targetX, targetY)
                step++
            }
        }
        if (step === 3) {
            let targetX = heartWidth / 2 - radius + radius * Math.cos(0.85 * (Math.PI))
            let targetY = heartHeight / 2 - radius + radius * Math.sin(0.84 * (Math.PI));
            if (nowCoor.x >= targetX && nowCoor.y > + targetY) {
                drawLine(nowCoor.x - speedLineX, nowCoor.y - speedLineY)
            } else {
                step++
            }
        }
        if (step === 4) {
            context.fillStyle = "red"
            context.fill()
        }

        context.strokeStyle = "red"
        context.stroke()
    }


    const animateHeart = () => {
        context.clearRect(0, 0, heartWidth, heartHeight)
        drawHeart()
        requestAnimationFrame(animateHeart)
    }

    const moreHeart = () => {
        createHeart()
    }
}
const canva = document.getElementById("heartCanvas2");
const ct = canva.getContext("2d");

let centerX = canva.width / 2
let centerY = canva.height / 2

let heartsCenter = [];
