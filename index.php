<?php

$baseDir = '/var/www/html';
$templateDir = $baseDir . '/example';

require_once $baseDir . '/vendor/autoload.php';

use Jadu\Pulsar\Twig\Extension\ArrayExtension;
use Jadu\Pulsar\Twig\Extension\AttributeParserExtension;
use Jadu\Pulsar\Twig\Extension\HelperOptionsModifierExtension;

$loader = new Twig_Loader_Filesystem($templateDir);
$loader->addPath($baseDir . '/', 'src');
$loader->addPath($baseDir . '/vendor/jadu/pulsar/views/', 'pulsar');

$twig = new Twig_Environment($loader,
    array(
        'debug' => true,
        'strict_variables' => true
    )
);

$twig->addExtension(new ArrayExtension());
$twig->addExtension(new AttributeParserExtension());
$twig->addExtension(new HelperOptionsModifierExtension());

$template = $twig->loadTemplate('index.twig');

print $template->render(array());
