<?php

function isValid()
{
    if (
        $_POST['name'] != '' &&
        $_POST['email'] != '' &&
        $_POST['comment'] != ''
    ) {
        return true;
    }
    return false;
}

$successOutput = '';
$errorOutput = '';


if (isValid()) {
    $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptchaResponse = $_POST['recaptchaResponse'];
    $recapthcaSecret = '6Lfd3AciAAAAALsGW4QGxAhgam-w4aC97_6va5CW';
    $recaptcha = file_get_contents($recaptchaUrl . '?secret=' . $recapthcaSecret . '&response=' . $recaptchaResponse);
    $recaptcha = json_decode($recaptcha);
    if ($recaptcha->success == true && $recaptcha->score > 0.5 && $recaptcha->action == 'guestForm'){
        $successOutput = "Comment was sent successfult";
    }else{
        $errorOutput = "Something went wrong. Please try again later";
    }


    $successOutput = "Message was sent successfully";
} else {
    $errorOutput = "Please fill out all of the fields";
}

$output = [
    'error' => $errorOutput,
    'success' => $successOutput
];

echo json_encode($output);
