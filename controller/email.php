<?php
    if(isset($_POST['contacto'])){
        $header  = 'MIME-Version: 1.0' . "\r\n";
        $header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['service'];
        $details = $_POST['details'];
    
        $body = '<table style="width: 100%;">
                    <thead>
                        <tr>
                            <td colspan="2" style="text-align: center;">
                                Contacto CV ONLINE
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="width: 10rem;">Consulta:</td>
                            <td>'.$subject.'</td>
                        </tr>
                        <tr>
                            <td style="width: 10rem;">Nombres:</td>
                            <td>'.$name.'</td>
                        </tr>
                        <tr>
                            <td style="width: 10rem;">Correo:</td>
                            <td>'.$email.'</td>
                        </tr>
                        <tr>
                            <td style="width: 10rem;">Detalles:</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 100%;">'.$details.'</td>
                        </tr>
                    </tbody>
                </table>';

        mail('correo@correo.com',$subject,$body,$header);
    }
?>