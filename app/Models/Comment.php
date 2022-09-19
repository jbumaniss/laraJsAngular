<?php


namespace App\Models;

use JsonSerializable;

class Comment implements JsonSerializable
{

    private string $name;
    private string $website;
    private string $comment;
    private string $created_at;

    public function __construct(string $name, string $website, string $comment, string $created_at)
    {
        $this->name = $name;
        $this->website = $website;
        $this->comment = $comment;
        $this->created_at = $created_at;
    }

    public function jsonSerialize()
    {
        return get_object_vars($this);
    }

    public function getName(): string
    {
        return $this->name;
    }


    public function getWebsite(): string
    {
        return $this->website;
    }


    public function getComment(): string
    {
        return $this->comment;
    }


    public function getCreatedAt(): string
    {
        return $this->created_at;
    }
}
