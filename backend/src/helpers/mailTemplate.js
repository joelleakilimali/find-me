const mailTemplate = (username, url) => {
  return (
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Confirmation of Email</title>
        <style>
          html,
          body {
            padding: 0;
            margin: 0;
            background-color: rgb(218, 217, 217);
          }
          .container {
            background-color: white;
            padding-bottom: 50px;
          }
          .title {
            background-color: blueviolet;
            padding: 2px 10px;
            color: white;
            margin: 0 !important;
          }
          .content {
            padding: 2px 10px;
          }
          .footer {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 20px;
          }
          .footer p {
            margin: 0;
          }
          .btn-link {
            padding: 10px;
            
            color: black;
            border: 0;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="title">
            <h2>Confirm your email address</h2>
          </div>
          <div class="content">
            <h3>Hello ` +
    username +
    `<br/> Thanks for joining Find Me!</h3>
            <p>To finish sign up, please confirm your email address.</p>
            <p>
              This ensures we have the right email in case we need to contact you
            </p>
            <a
            class="btn-link"
            href="` +
    url +
    `"
            target="_blank"
            rel="noopener noreferrer"
            >Confirm Email Address</a
          >
          </div>
        </div>
        <div class="footer">
          <p>Copyright &copy;2022 All right reserved</p>
          <p>You received this mail because you signed up for notifications</p>
        </div>
      </body>
    </html>
    
    `
  );
};
module.exports = {
  mailTemplate,
};
