<?php

declare(strict_types=1);

test('debugbar service provider is registered', function (): void {
    $this->assertNotEmpty(app()->getProviders(Fruitcake\LaravelDebugbar\ServiceProvider::class));
});
