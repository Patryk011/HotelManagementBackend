<html>
<head>
    <title>Hotel login</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/login.css" />
</head>
<body>
<div class="main-container">
<div class="login-container">
    <div class="logo">
        <img src="${url.resourcesPath}/img/hotel_logo.png" alt="Hotel management Logo" />
    </div>
    <div class="login-form">

        <form action="${url.loginAction}" method="POST">
            <label for="username">Email lub nazwa użytkownika</label>
            <input type="text" id="username" name="username" placeholder="Wprowadź email" required />
            <label for="password">Hasło</label>
            <input type="password" id="password" name="password" placeholder="Wprowadź hasło" required />
            <#--  <div class="actions">
                <label for="rememberMe" class="rememberMe">
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    Zapamiętaj mnie
                </label>  -->

<#--            <a href="${url.loginResetCredentialsUrl}>Zapomniałeś hasła?</a>      this.isAdmin = keycloak.hasRealmRole("admin");-->
            <#--  </div>  -->
            <button type="submit" class="login-btn">Zaloguj się</button>
        </form>
    </div>
    <#--  <#if client.clientId == "hotel-client">
    <div class="login-footer">

        <a href="${url.registrationUrl}">Nie masz konta? Zarejestruj się</a>
    </div>
    </#if>  -->

    <div class="social-login">
        <#if social.providers?? && social.providers?size gt 0>
            <p>Lub zaloguj się używając kont społecznościowych</p>
            <#list social.providers as provider>

                <a href="${provider.loginUrl}" class="${provider.alias}-login-btn">

                    <#assign providerImages = {
                    "google": "g-google.png",
                    "facebook": "facebook.png"
                    } />

                    <img src="${url.resourcesPath}/img/${providerImages[provider.alias]}" alt="${provider.alias}" />

                    <span class="social-provider-name">${provider.displayName}</span>
                </a>
            </#list>
        </#if>
    </div>

    <div class="debug-info">
    <#if client?? && client.clientId?? && client.clientId == "hotel-worker">
        <p>Current client: ${client.clientId}</p>
    <#else>
        <p>Client information not available</p>
    </#if>
    </div>

</div>
</div>
</body>
</html>
