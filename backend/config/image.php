<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Image Driver
    |--------------------------------------------------------------------------
    |
    | Intervention Image supports "GD Library" and "Imagick" to process images
    | internally. You may choose one of them according to your PHP
    | configuration. By default PHP's "GD Library" implementation is used.
    |
    | Supported: "gd", "imagick"
    |
     */

    'driver' => 'gd',

    'index-image-sizes' => [

        'large' =>
        [
            'width' => 1024,
            'height' => 1024,
        ],
        'medium' =>
        [
            'width' => 512,
            'height' => 512,
        ],
        'small' =>
        [
            'width' => 128,
            'height' => 128,
        ],
        'largeRect' =>
        [
            'width' => 1920,
            'height' => 1080,
        ],
        'mediumRect' =>
        [
            'width' => 1080,
            'height' => 607,
        ],
        'smallRect' =>
        [
            'width' => 512,
            'height' => 287,
        ],
        'tm' =>
        [
            'width' => 128,
            'height' => 128,
        ],

    ],

        'default-current-index-image' => 'largeRect',


];
