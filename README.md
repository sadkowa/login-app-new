# Hello Candidate!

### This is a recruitment task that tests your coding skills in React.

Please <b>fork</b> or <b>download</b> repository and put it on your <b>github</b> or similar tool. </br>
When you download the repository use <b>npm install</b> in main folder. </br>
To run mocked server and React code, use <b>npm run start</b>.

[http://localhost:3000](http://localhost:3000)
</br>

Test data user for loginApi: </br>
email: <i>candidate@test.com</i> </br>
userName: <i>tester</i> </br>
password: <i>test1234</i>

## TODO:

- Fetch data from login endpoint <b>http://localhost:8080/login</b>. Test account credentials are above.
- Divide the steps of the form into two parts. The form on the first subpage(first step) should contain the field "email" and "next" button. </br> On the second subpage(second step), the fields "login", "password" and "submit" button. After completing all the data and approving the form, the user should receive a message about successful login.
- Save "token" from successful "login" request in sessionStorage.
- Display backend messages validation in red color below form.
- Add frontend validation. If a field is omitted, receive a message about missing data. You can use external tools if you want.
- In Navbar display full name of the logged user. Keep user logged with <b>http://localhost:8080/authUser</b> endpoint. To recive full name of the user you need send token in authorization header.

## ADDITIONAL TODO:

- Improve the look of the application in css. You have full freedom to do so.
- Use additional styling libraries/tools

## GOOD LUCK! :)

- If you have any additional questions feel free to ask: <i>pawkaniak@gmail.com</i>
