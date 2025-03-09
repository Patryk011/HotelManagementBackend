<html>
<head>
    <title>Car Rental Registration</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/register.css" />
</head>
<body>
<div class="main-container">
    <div class="register-container">
        <div class="logo">
            <img src="${url.resourcesPath}/img/logo.png" alt="Car Rental Logo" />
        </div>
        <kc-messages>
            <div class="alert alert-error" data-kc-message="error"></div>
            <div class="alert alert-warning" data-kc-message="warning"></div>
            <div class="alert alert-info" data-kc-message="info"></div>
        </kc-messages>
        <div class="register-form">
            <h1>Rejestracja</h1>
            <form action="${url.registrationAction}" method="POST">
                <label for="firstName">Imię</label>
                <input type="text" id="firstName" name="firstName" placeholder="Wpisz swoje imię" required />

                <label for="lastName">Nazwisko</label>
                <input type="text" id="lastName" name="lastName" placeholder="Wpisz swoje nazwisko" required />

                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Wpisz swój email" required />

                <label for="username">Nazwa użytkownika</label>
                <input type="text" id="username" name="username" placeholder="Wpisz nazwę użytkownika" required />

                <label for="password">Hasło</label>
                <input type="password" id="password" name="password" placeholder="Wpisz swoje hasło" required />

                <label for="password-confirm">Potwierdź hasło</label>
                <input type="password" id="password-confirm" name="password-confirm" placeholder="Potwierdź hasło" required />

                <label for="phoneNumber">Numer telefonu</label>
                <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Podaj numer telefonu" required/>

                <label for="birthDate">Data urodzenia</label>
                <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        placeholder="YYYY-MM-DD"
                        required
                />

                <button type="submit" class="register-btn">Zarejestruj się</button>
                <a href="${url.loginUrl}">Masz już konto? Zaloguj się</a>
            </form>
        </div>


    </div>
</div>
</body>
</html>
