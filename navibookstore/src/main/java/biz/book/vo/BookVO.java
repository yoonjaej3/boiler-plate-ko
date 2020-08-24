package biz.book.vo;

public class BookVO {
	int bookno;
	String publisher;
	String bookname;
	String author;
	String count;
	String img;
	//1-2-4 å�� ����
	
	public BookVO() {
		super();
	}

	public BookVO(int bookno, String publisher, String bookname, String author, String count,String img) {
		this.bookno = bookno;
		this.publisher = publisher;
		this.bookname = bookname;
		this.author = author;
		this.count = count;
		this.img = img;
	}
	
	public int getBookno() {
		return bookno;
	}
	public void setBookno(int bookno) {
		this.bookno = bookno;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public String getBookname() {
		return bookname;
	}
	public void setBookname(String bookname) {
		this.bookname = bookname;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	
}
