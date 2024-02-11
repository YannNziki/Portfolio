<?php
    session_start();
    ?>
<html>
    <head>
        <title>Gestion de base de donnees MYSQL en php</title>
</head>
<body>
    <?php
     @include("connexion.php");
    $requete="select * from ouvrage";
    $resultat=mysqli_query($conn, $requete);
    echo mysqli_num_rows($resultat);
    ?>
     
    <center><table border="1">
        <tr><td>CodeOuvrage</td><td>titre</td><td>rayon</td></tr>

    <?php while($enreg=mysqli_fetch_array($resultat))
    {
    ?>
    <tr>
    <td><?php echo $enreg["CodeOuvrage"];?></td>
    <td><?php echo $enreg["TitreOuvrage"];?></td>
    <td><?php echo $enreg["CodeRayon"];?></td>
    
    </tr>
    <?php  } ?>
    </table></center>
    <?php
    echo '<center><a href="projet2.php">retour</a></center>';
    mysqli_close($conn);
    ?>
    </body>
    </html>
    