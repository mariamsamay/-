 // 1. تعريف ثوابت قواعد العمل
        const PASS_MARK = 50;
        const MIN_ATTENDANCE = 75;
// 2. دالة حساب التقدير بالحروف
function getGradeLetter(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    if (average >= PASS_MARK) return "E";
    return "F";
}

// 3. دالة لحساب النتيجة النهائية
function getFinalResult(average, attendance) {
    if (average >= PASS_MARK && attendance >= MIN_ATTENDANCE) {
        return "ناجح (Pass)";
    } else {
        return "يحتاج مراجعة (Needs Review)";
    }
}

// 4. ربط حدث النقر بالزر
document.getElementById("analyzeBtn").addEventListener("click",
function() {

    // قراءة النصوص الخام أولاً وحذف المسافات الزائدة
    const rawG1 = document.getElementById("grade1").value.trim();
    const rawG2 = document.getElementById("grade2").value.trim();
    const rawG3 = document.getElementById("grade3").value.trim();
    const rawAtt = document.getElementById("attendance").value.trim();
    const reportBox = document.getElementById("reportBox");

    // التحقق من عدم وجود حقول فارغة قبل أي عملية حسابية
    if (rawG1 === "" || rawG2 === "" || rawG3 === "" || rawAtt === "") {
        reportBox.style.display = "block";
        reportBox.innerHTML = `<p style="color: red; font-weight: bold;">خطأ: الرجاء عدم ترك أي حقل فارغ وإدخال جميع الدرجات.</p>`;
        return; // إيقاف التنفيذ
    }

    // التحويل الآمن للنصوص إلى أرقام
    const g1 = Number(rawG1);
    const g2 = Number(rawG2);
    const g3 = Number(rawG3);
    const att = Number(rawAtt);

    // تخزين الدرجات في مصفوفة وحساب المجموع باستخدام حلقة تكرارية
    const grades = [g1, g2, g3];
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    // حساب المتوسط واستخراج النتائج
    const average = total / grades.length;
    const letter = getGradeLetter(average);
    const result = getFinalResult(average, att);

    // 5. عرض التقرير باستخدام قوالب النصوص
    reportBox.style.display = "block";
    reportBox.innerHTML = `
        <h4>تقرير الطالب مريم سامي:<\h4>
        <p>إجمالي الدرجات: <strong>${total}</strong></p>
        <p>المتوسط: <strong>${average.toFixed(1)}</strong></p>
        <p>التقدير: <strong>${letter}</strong></p>
        <p>الحالة: <strong>${result}</strong></p>
             `;
        });
    