<?php
require 'system/sys.php';



?><!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Ticket</title>
  <link rel="stylesheet" href="styl.css">
</head>

<body>
  <article class="wrapper">
    <header>
      <article class='about'>
        <h1>Kup bilet</h1>
      </article>
    </header>
    <article class="form">
      <form>
        <input class='email' placeholder="email" name='email' type="email" class='regex'>
        <input class='password' placeholder="password" name='password' type="password" class="regex">
        <button>Zaloguj</button>
        <button type='button' class="logout">Wyloguj</button>
      </form>

      <p>Zalogowano: <span></span></p>
    </article>
    <article class='choice'>
      <select class='cinema'>
        <option value="">Kino...</option>
        <option value="Katowice">Katowice</option>
        <option value="Warszawa">Warszawa</option>
        <option value="Wrocław">Wrocław</option>
      </select>
      <select class='film'>
        <option value="">Film...</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <select class='hour'>

      </select>
    </article>
    <article class='hall'>

    </article>
    <h2>Do zapłaty: <span>0</span> zł</h2>
    <button class="approve">Zatwierdź</button>

    <a class='return' href="./../index.html">Strona główna</a>
  </article>
  <article class="summary">
    <header>
      <article class='about'>
        <h1>Podsumowanie</h1>
      </article>
    </header>
    <section class="info">
      <h3>Miasto: <span></span></h3>
      <h3>Film: <span></span></h3>
      <h3>Godzina: <span></span></h3>
      <h3>Miejsce: <span></span></h3>
      <h3>Do zapłaty: <span></span> zł</h3>
    </section>
  </article>
  <script src="baza.js"></script>
  <script src="java.js"></script>
</body>

</html>