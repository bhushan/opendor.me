<?php

namespace App\Models;

use App\Eloquent\Orbit;
use Illuminate\Database\Schema\Blueprint;
use Spatie\Sluggable\SlugOptions;

class Sponsor extends Orbit
{
    public static $driver = 'yaml';

    public static function schema(Blueprint $table): void
    {
        $table->string('slug')->primary();
        $table->string('name');
        $table->string('url');
        $table->string('image');
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }
}