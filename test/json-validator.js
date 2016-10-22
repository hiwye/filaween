var validator = require('is-my-json-valid');
var fs = require('fs');

var validate = validator({
    required: true,
    title: 'Filament set',
    type: 'array',
    items: {
        title: "Filament",
        type: "object",
        properties: {
            material: {
                required: true,
                description: "Material type",
                type: "string"
            },
            brand: {
                required: true,
                description: "Material brand",
                type: "string"
            },
            product: {
                required: true,
                description: "Material product name",
                type: "string"
            },
            printer: {
                required: true,
                description: "Print settings etc.",
                type: "object",
                properties: {
                    nozzle_temp: {
                        required: true,
                        description: "Nozzle temperature",
                        type: "number"
                    },
                    bed_material: {
                        required: true,
                        description: "Bed material",
                        type: "string"
                    },
                    bed_temp: {
                        required: true,
                        description: "Bed temperature",
                        type: "number"
                    }
                }
            },
            price_per_kg: {
                required: true,
                description: "Filament price per kilogram",
                type: "number"
            },
            quality: {
                required: true,
                description: "Quality rating",
                type: "object",
                properties: {
                    rated: {
                        required: true,
                        description: "Overall quality out of 20",
                        type: "number"
                    },
                    threedbenchy: {
                        required: true,
                        description: "3D Benchy rating out of 5",
                        type: "number"
                    },
                    overhangs: {
                        required: true,
                        description: "Overhangs rating out of 5",
                        type: "number"
                    },
                    details: {
                        required: true,
                        description: "Details rating out of 5",
                        type: "number"
                    },
                    bridges: {
                        required: true,
                        description: "Bridges rating out of 5",
                        type: "number"
                    },
                    warp: {
                        required: true,
                        description: "Warp description",
                        type: "string"
                    }
                }
            },
            strength: {
                required: true,
                description: "Strength rating",
                type: "object",
                properties: {
                    rated: {
                        required: true,
                        description: "Overall strength in kg",
                        type: "number"
                    },
                    bend: {
                        required: true,
                        description: "Bend rating",
                        type: "object",
                        properties: {
                            strength: {
                                required: true,
                                type: "number"
                            },
                            adhesion: {
                                required: true,
                                type: "number"
                            }
                        }
                    },
                    pull: {
                        required: true,
                        description: "Pull rating",
                        type: "object",
                        properties: {
                            strength: {
                                required: true,
                                type: "number"
                            },
                            adhesion: {
                                required: true,
                                type: "number"
                            }
                        }
                    },
                    misc: {
                        required: true,
                        description: "Misc strength rating",
                        type: "object",
                        properties: {
                            bendflex: {
                                required: true,
                                type: "number"
                            },
                            temperature_stability: {
                                required: true,
                                type: "number"
                            }
                        }
                    }
                }
            },
            ease_of_use: {
                required: true,
                description: "Ease of use rating out of 5",
                type: "number"
            },
            links: {
                required: true,
                description: "Links to youtube video and purchase page",
                type: "object",
                properties: {
                    video: {
                        required: true,
                        type: "string"
                    },
                    purchase: {
                        required: true,
                        type: ["string","null"]
                    }
                }
            },
            id: {
                required: true,
                description: "Unique ID, used for thumbnail image and favourites",
                type: "string"
            }
        }
    }
});

var json = JSON.parse(fs.readFileSync('./assets/data.json'));

if(validate(json)){
    console.log("JSON test passed!");
}else{
    console.log("JSON test failed!");
    process.exit(1);
}