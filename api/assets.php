<?php

/**
 * Built assets aren't currently routeable via vercel-php
 * Manually route assets to be found
 */
if ($_GET['type'] === 'css') {
    header("Content-type: text/css; charset: UTF-8");
    echo require __DIR__ . '/../public/css/' . basename($_GET['file']);
}
if ($_GET['type'] === 'js') {
    header('Content-Type: application/javascript; charset: UTF-8');
    echo require __DIR__ . '/../public/js/' . basename($_GET['file']);
}
if ($_GET['type'] === 'vue') {
    header('Content-Type: application/javascript; charset: UTF-8');
    echo require __DIR__ . '/../public/js/' . basename($_GET['file']);
}
if ($_GET['type' === 'webmanifest']){
    header('Content-Type: application/manifest+json; charset: UTF-8');
    echo require __DIR__ . '/../public/manifest.webmanifest';
}

if ($_GET['type'] === 'json') {
    header('Content-Type: application/json; charset: UTF-8');
    echo require __DIR__ . '/../public/' . basename($_GET['file']);
}

if ($_GET['type'] === 'manifest') {
    header('Content-Type: application/manifest+json; charset=UTF-8');
    echo file_get_contents(__DIR__ . '/../public/manifest.json');
    exit;
}
