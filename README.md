# JavaScript - Kiến thức

*Event_Loop:
- Event Loop là cơ chế giúp Javascript có thể thực hiện nhiều thao tác cùng một lúc (concurrent model).
- Event Loop có tên như vậy bởi vì có một vòng lặp vô tận trong Javascript Runtime (V8 trong Google Chrome) dùng để lắng nghe các Event.
- Nhiệm vụ của Event Loop rất đơn giản đó là đọc Stack và Event Queue.
 Nếu nhận thấy Stack rỗng nó sẽ nhặt Event đầu tiên trong Event Queue và handler (callback hoặc listener) gắn với Event đó và đẩy vào Stack.
 Đặc điểm của việc thực thi hàm trong JS là sẽ chỉ dừng lại khi hàm return hoặc throw exception.

*Callback:
- Callback function có thể được hiểu nôm na như sau: callback tức là ta truyền một đoạn code (Hàm A) này vào một đoạn code khác (Hàm B).
 Tới một thời điểm nào đó, Hàm A sẽ được hàm B gọi lại (callback).
	+ Nguyên tắc khi thực hiện Callback Function:
		1.Tham số truyền vào phải là một function(nếu không kiểm tra giá trị mà người dùng truyền vào là một function thì không thể thực thi được).
		2.Cẩn thận với this khi hàm callback nằm trong object(Hàm được xây dựng trong Object là hàm được định nghĩa thông qua key của object và giá trị của key là một hàm).
		3.Khắc phục this khi hàm callback nằm trong object(sử dụng apply).
		4.Callback hell(Khi callback hell xuất hiện, logic xử lí của chương trình sẽ trở nên cực kì phức tạp và khó nắm bắt, khi có lỗi xảy ra ta rất khó để debug cũng như giải quyết).

*Object
-Trong JavaScript, một object là một thực thể độc lập, với thuộc tính và kiểu.
-Thuộc tính là một cặp khóa - giá trị chứa tên và giá trị.
-Tên thuộc tính là một giá trị duy nhất có thể bị ép buộc vào một chuỗi và trỏ đến một giá trị.
-Giá trị thuộc tính có thể là bất kỳ giá trị nào, bao gồm các đối tượng khác hoặc các hàm, được liên kết với tên/khóa.
	+ Đối tượng (Object) và những điều cần biết:
		1.Tạo đối tượng(3 cách C1: Sử dụng từ khóa {}, C2: Sử dụng từ khóa new Object(), C3: Sử dụng phương thức static).
		2.Nhận và thiết đặt thuộc tính (Get and Set Properties).
		3.Phương thức trong đối tượng(Một phương thức là một hàm liên kết với một object).
		4.Setter và Getter(setter nó chỉ được gọi qua toán tử gán giá trị cho nó, getter thì chỉ được gọi khi truy cập lấy giá trị thuộc tính).
		5.Sử dụng this để tham chiếu tới đối tượng(this đề cập đến đối tượng mà nó được định nghĩa).
		6. So sánh Objects(Hai đối tượng tách biệt không bao giờ bằng nhau, thậm chí nếu chúng có cùng những thuộc tính. Chỉ khi nó so sánh với chính nó thì kết quả mới là true).

*Prototype
- Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác.
- Tất cả các object trong javascript đều có một prototype, và các object này kế thừa các thuộc tính (properties) cũng như phương thức (methods) từ prototype của mình.
	+ Sự quan trọng của prototype:
		1.Sự kế thừa trong Javascript(Để thực hiện kế thừa trong Js, bạn chỉ cần tạo 1 hàm khởi tạo. Sau đó thêm các thuộc tính và phương thức vào thuộc tính prototype của hàm khởi tạo này).
		2.Truy cập vào các thuộc tính của đối tượng: Prototype chain
			- Khi chúng ta truy cập vào một Property của một Object, JavaScript sẽ tìm Property đó bên trong chính Object.
			- Nếu không có nó sẽ tiếp tục tìm lên trên Prototype của Object và cứ tiếp tục như thế cho đến khi gặp Object.prototype thì dừng và cho ra kết quả (undefined nếu không tìm thấy).

#JavaScript - Caro


	