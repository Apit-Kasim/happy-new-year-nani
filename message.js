// ฟังก์ชันสำหรับการพิมพ์ข้อความ
function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.style.display = 'block';
    element.innerHTML = ''; // ลบข้อความเก่า
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback(); // เรียก callback เมื่อพิมพ์เสร็จ
        }
    }
    type();
}

// ฟังก์ชันลบข้อความทีละตัวอักษร
function removeMessage(element, speed, callback) {
    let text = element.innerHTML;
    let i = text.length - 1;

    function deleteChar() {
        if (i >= 0) {
            element.innerHTML = text.substring(0, i);
            i--;
            setTimeout(deleteChar, speed);
        } else if (callback) {
            callback(); // เรียก callback เมื่อข้อความถูกลบหมด
        }
    }
    deleteChar();
}

// เมื่อคลิกที่กล่อง
document.getElementById("box").addEventListener("click", function() {
    const messages = [
        "Happy New Year 2025 Nani",
        "Tahun baru ini adalah awal baru yang penuh harapan bagi nga",
        "Jadikan semua pengalaman tahun ini sebagai pelajaran berharga",
        "Semoga kebahagiaan selalu menyertaimu di setiap langkah l nga",
        "Mari sambut tahun baru ini dengan hati yang penuh rasa syukur dan semangat",
        "Ana percaya, nga bisa mencapai semua yang nga impikan",
        "Setiap tantangan yang datang hanya akan membuat nga semakin kuat",
        "Biarlah kebahagiaan dan keberanian menjadi cahaya yang memandu nga",
        "Tahun baru ini adalah lembaran kosong untuk nga menulis cerita indah baru",
        "Jangan takut bermimpi besar, karena nga layak untuk itu",
        "Hidup adalah perjalanan, dan tahun ini adalah babak baru untuk nga",
        "Semoga kesehatan, kebahagiaan, dan kesuksesan menyertai nga p langkah",
        "Ketika kesulitan datang, ingatlah bahwa badai pasti berlalu",
        "Bersyukurlah atas setiap momen yang telah nga lalui, baik suka maupun duka",
        "Tahun baru adalah hadiah indah yang patut nga rayakan sepenuhnya",
        "Langkah kecil l nga hari ini bisa membawa perubahan besar esok hari",
        "Jangan pernah menyerah, Nani, kesuksesan ada di depan mata",
        "Nikmati setiap momen di tahun baru ini dengan hati yang penuh kebahagiaan",
        "Semoga tahun baru ini menjadi tahun yang penuh makna dan berkah untuk nga"
    ];
    

    // หน่วงเวลา 3 วินาที ก่อนเริ่มพิมพ์ข้อความ
    setTimeout(() => {
        function printMessages(index) {
            if (index < messages.length) {
                const messageId = `message${index + 1}`;
                const element = document.getElementById(messageId);

                if (element) {
                    typeWriter(element, messages[index], 100, function() {
                        setTimeout(() => {
                            removeMessage(element, 100, function() {
                                printMessages(index + 1); // พิมพ์ข้อความถัดไปหลังจากลบข้อความเสร็จ
                            });
                        }, 2000); // รอ 2 วินาทีก่อนที่จะลบข้อความ
                    });
                }
            }
        }

        printMessages(0); // เริ่มต้นพิมพ์ข้อความที่ index 0
    }, 4000); // หน่วงเวลา 3 วินาที
});
