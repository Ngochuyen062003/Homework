// cho mảng arr = [2, 8, 24, 3, 4, 53, 7, 8, 10]
// tạo function sortArray(arr) để sắp xếp các phần tử trong mảng theo thứ tự tăng dần
// sử dụng vòng lặp for để sắp xếp các phần tử trong mảng
// ở vòng for đầu tiên, khởi tạo i = 0, i nhỏ hơn độ dài của mảng trừ 1, i tăng lên 1 mỗi lần lặp
// ở vòng for thứ hai, khởi tạo j = i + 1, j nhỏ hơn độ dài của mảng, j tăng lên 1 mỗi lần lặp
// nếu arr[i] < hoặc = arr[j] thì không cần hoán đổi vị trí
// nếu arr[i] > arr[j] thì hoán đổi vị trí của arr[i] và arr[j]

var arr = [20, 8, 24, 3, 4, 53, 7, 8, 10];
function sortArray(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
}

console.log('Hàm sau khi sắp xếp: ' + sortArray(arr));

