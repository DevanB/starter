<?php

declare(strict_types=1);

test('debugbar service provider is registered', function (): void {
    expect(app()->getProviders(Fruitcake\LaravelDebugbar\ServiceProvider::class))
        ->not->toBeEmpty();
});
