{
	"version":"LAYASCENE3D:01",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"TitleScene_Laya",
			"ambientColor":[
				0.2,
				0.2,
				0.2
			],
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"Camera",
				"props":{
					"name":"Main Camera Prefab",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-5,
						2.1,
						-10.8
					],
					"rotation":[
						0,
						0.9975641,
						-0.06975647,
						0
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":1,
					"orthographic":false,
					"fieldOfView":60,
					"nearPlane":0.3,
					"farPlane":1000,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						0.1921569,
						0.3019608,
						0.4745098,
						0.01960784
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"DirectionLight",
				"props":{
					"name":"Directional light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-1.5,
						3.3,
						4.2
					],
					"rotation":[
						0.1093817,
						0.8754261,
						0.4082179,
						-0.2345697
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1.4,
					"lightmapBakedType":1,
					"color":[
						0.9215686,
						0.8823529,
						0.6862745
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"Floor2 Prefab",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-40,
						0,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						4,
						3,
						3
					]
				},
				"components":[],
				"child":[
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"ie1",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								2.183523,
								0,
								4.84068
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499901,
								0.2602144,
								0.07511105
							],
							"meshPath":"Assets/Models/model_maps-ie1.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/ie.lmat"
								}
							]
						},
						"components":[
							{
								"type":"Animator",
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"ki3",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-0.1502285,
								0,
								4.386835
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499935,
								0.15,
								0.1125124
							],
							"meshPath":"Assets/Models/model_maps-ki3.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/ki_01.lmat"
								}
							]
						},
						"components":[
							{
								"type":"Animator",
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"map2",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								3.989953
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1.5
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/map_02.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											0,
											0,
											2.384186E-07
										],
										"size":[
											10,
											2.220446E-16,
											10
										]
									}
								],
								"isTrigger":false
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"map1",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								7.000001,
								10.7612
							],
							"rotation":[
								0,
								0.7071068,
								-0.7071068,
								0
							],
							"scale":[
								1,
								1,
								1.5
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/map_01.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"MeshColliderShape",
										"mesh":"Library/unity default resources-Plane.lm"
									}
								],
								"isTrigger":false
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"yama4",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								2.310251,
								0,
								8.630448
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499901,
								0.1666667,
								0.125011
							],
							"meshPath":"Assets/Models/model_maps-yama3.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/yama.lmat"
								}
							]
						},
						"components":[],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"yama5",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-4.045315,
								0,
								7.694568
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499901,
								0.15,
								0.1125099
							],
							"meshPath":"Assets/Models/model_maps-yama2.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/yama.lmat"
								}
							]
						},
						"components":[],
						"child":[]
					}
				]
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"Floor1 Prefab",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						4,
						3,
						3
					]
				},
				"components":[],
				"child":[
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"ki1",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								4.17931,
								0,
								3.751577
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499901,
								0.15,
								0.1125099
							],
							"meshPath":"Assets/Models/model_maps-ki1.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/ki_01.lmat"
								}
							]
						},
						"components":[
							{
								"type":"Animator",
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"ki2",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								1.770654,
								0,
								2.15659
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499901,
								0.15,
								0.1125099
							],
							"meshPath":"Assets/Models/model_maps-ki2.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/ki_01.lmat"
								}
							]
						},
						"components":[
							{
								"type":"Animator",
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"ki3",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-1.318053,
								0,
								4.577883
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499901,
								0.15,
								0.1125099
							],
							"meshPath":"Assets/Models/model_maps-ki3.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/ki_01.lmat"
								}
							]
						},
						"components":[
							{
								"type":"Animator",
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"map2",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-6.337219E-06,
								0,
								3.989953
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1.5
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/map_02.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											0,
											0,
											2.384186E-07
										],
										"size":[
											10,
											2.220446E-16,
											10
										]
									}
								],
								"isTrigger":false
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"map1",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-6.337219E-06,
								7.000001,
								10.7612
							],
							"rotation":[
								3.090862E-08,
								0.7071068,
								-0.7071068,
								3.090862E-08
							],
							"scale":[
								1,
								1,
								1.5
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/map_01.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"MeshColliderShape",
										"mesh":"Library/unity default resources-Plane.lm"
									}
								],
								"isTrigger":false
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"yama3",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-0.3977405,
								0,
								10.10604
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499901,
								0.15,
								0.1125099
							],
							"meshPath":"Assets/Models/model_maps-yama2.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/yama.lmat"
								}
							]
						},
						"components":[],
						"child":[]
					}
				]
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"Floor0 Prefab",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						40,
						0,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						4,
						3,
						3
					]
				},
				"components":[],
				"child":[
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"ki1",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								3.314091,
								0,
								4.593046
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499935,
								0.15,
								0.1125124
							],
							"meshPath":"Assets/Models/model_maps-ki1.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/ki_01.lmat"
								}
							]
						},
						"components":[
							{
								"type":"Animator",
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"ki2",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-0.4197683,
								0,
								5.055505
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499935,
								0.15,
								0.1125124
							],
							"meshPath":"Assets/Models/model_maps-ki2.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/ki_01.lmat"
								}
							]
						},
						"components":[
							{
								"type":"Animator",
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"map2",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								3.989953
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1.5
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/map_02.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											0,
											0,
											2.384186E-07
										],
										"size":[
											10,
											2.220446E-16,
											10
										]
									}
								],
								"isTrigger":false
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"map1",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								7.000001,
								10.7612
							],
							"rotation":[
								0,
								0.7071068,
								-0.7071068,
								0
							],
							"scale":[
								1,
								1,
								1.5
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/map_01.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"MeshColliderShape",
										"mesh":"Library/unity default resources-Plane.lm"
									}
								],
								"isTrigger":false
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"yama1",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								2.514173,
								0,
								10.33332
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499901,
								0.15,
								0.1125099
							],
							"meshPath":"Assets/Models/model_maps-yama3.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/yama.lmat"
								}
							]
						},
						"components":[],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"yama2",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-3.006423,
								0,
								8.858162
							],
							"rotation":[
								0,
								0.712819,
								0,
								-0.7013481
							],
							"scale":[
								0.1499901,
								0.15,
								0.1125099
							],
							"meshPath":"Assets/Models/model_maps-yama1.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Models/Materials/yama.lmat"
								}
							]
						},
						"components":[],
						"child":[]
					}
				]
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"Player",
					"active":true,
					"isStatic":false,
					"layer":8,
					"position":[
						0,
						1,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						2,
						0.9867673
					]
				},
				"components":[
					{
						"type":"Rigidbody3D",
						"mass":1,
						"isKinematic":false,
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"linearDamping":0,
						"angularDamping":0,
						"overrideGravity":false,
						"gravity":[
							0,
							0,
							0
						],
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									1,
									1,
									1
								]
							}
						],
						"isTrigger":false
					}
				],
				"child":[
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"AttackCollider",
							"active":true,
							"isStatic":false,
							"layer":8,
							"position":[
								-0.5637242,
								0,
								0
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								2,
								1,
								2
							],
							"meshPath":"Library/unity default resources-Sphere.lm",
							"enableRender":false,
							"materials":[
								{
									"path":"Assets/Materials/OniGroup Material.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"SphereColliderShape",
										"center":[
											-5.960464E-08,
											0,
											-8.940697E-08
										],
										"radius":0.5
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"ShuriKenParticle3D",
						"props":{
							"name":"OniHitParticle Prefab",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-0.06024505,
								-0.4408742,
								-0.02471944
							],
							"rotation":[
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale":[
								1,
								1.01341,
								0.5
							],
							"isPerformanceMode":true,
							"duration":1,
							"looping":false,
							"prewarm":false,
							"startDelayType":0,
							"startDelay":0,
							"startDelayMin":0,
							"startDelayMax":0,
							"startLifetimeType":0,
							"startLifetimeConstant":0.2,
							"startLifetimeConstantMin":0,
							"startLifetimeConstantMax":0.2,
							"startLifetimeGradient":{
								"startLifetimes":[]
							},
							"startLifetimeGradientMin":{
								"startLifetimes":[]
							},
							"startLifetimeGradientMax":{
								"startLifetimes":[]
							},
							"startSpeedType":0,
							"startSpeedConstant":0,
							"startSpeedConstantMin":0,
							"startSpeedConstantMax":0,
							"threeDStartSize":false,
							"startSizeType":0,
							"startSizeConstant":5,
							"startSizeConstantMin":0,
							"startSizeConstantMax":5,
							"startSizeConstantSeparate":[
								5,
								1,
								1
							],
							"startSizeConstantMinSeparate":[
								0,
								0,
								0
							],
							"startSizeConstantMaxSeparate":[
								5,
								1,
								1
							],
							"threeDStartRotation":false,
							"startRotationType":1,
							"startRotationConstant":0,
							"startRotationConstantMin":0,
							"startRotationConstantMax":0,
							"startRotationConstantSeparate":[
								0,
								0,
								0
							],
							"startRotationConstantMinSeparate":[
								0,
								0,
								0
							],
							"startRotationConstantMaxSeparate":[
								0,
								0,
								0
							],
							"randomizeRotationDirection":0,
							"startColorType":0,
							"startColorConstant":[
								1,
								1,
								1,
								1
							],
							"startColorConstantMin":[
								0,
								0,
								0,
								0
							],
							"startColorConstantMax":[
								1,
								1,
								1,
								1
							],
							"gravity":[
								0,
								-9.81,
								0
							],
							"gravityModifier":0,
							"simulationSpace":1,
							"scaleMode":2,
							"playOnAwake":false,
							"maxParticles":1000,
							"autoRandomSeed":true,
							"randomSeed":3.904182E+09,
							"emission":{
								"enable":true,
								"emissionRate":1,
								"emissionRateTip":"Time",
								"bursts":[
									{
										"time":0,
										"min":1,
										"max":1
									}
								]
							},
							"textureSheetAnimation":{
								"enable":true,
								"tiles":[
									4,
									4
								],
								"type":0,
								"randomRow":true,
								"rowIndex":0,
								"frame":{
									"type":1,
									"constant":0,
									"overTime":{
										"frames":[
											{
												"key":0,
												"value":0
											},
											{
												"key":1,
												"value":15.9984
											}
										]
									},
									"constantMin":0,
									"constantMax":0,
									"overTimeMin":{
										"frames":[]
									},
									"overTimeMax":{
										"frames":[
											{
												"key":0,
												"value":0
											},
											{
												"key":1,
												"value":15.9984
											}
										]
									}
								},
								"startFrame":{
									"type":0,
									"constant":0,
									"constantMin":0,
									"constantMax":0
								},
								"cycles":1,
								"enableUVChannels":1,
								"enableUVChannelsTip":"-1"
							},
							"renderMode":0,
							"stretchedBillboardCameraSpeedScale":0,
							"stretchedBillboardSpeedScale":0,
							"stretchedBillboardLengthScale":2,
							"sortingFudge":0,
							"material":{
								"type":"Laya.ShurikenParticleMaterial",
								"path":"Assets/Materials/hit_effect.lmat"
							}
						},
						"components":[],
						"child":[]
					},
					{
						"type":"ShuriKenParticle3D",
						"props":{
							"name":"OniRunParticle Prefab",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								-0.5,
								0
							],
							"rotation":[
								0.07391278,
								-0.7032332,
								-0.07391278,
								-0.7032332
							],
							"scale":[
								1.01341,
								0.5584888,
								0.9415112
							],
							"isPerformanceMode":true,
							"duration":5,
							"looping":true,
							"prewarm":false,
							"startDelayType":0,
							"startDelay":0,
							"startDelayMin":0,
							"startDelayMax":0,
							"startLifetimeType":0,
							"startLifetimeConstant":0.6,
							"startLifetimeConstantMin":0,
							"startLifetimeConstantMax":0.6,
							"startLifetimeGradient":{
								"startLifetimes":[]
							},
							"startLifetimeGradientMin":{
								"startLifetimes":[]
							},
							"startLifetimeGradientMax":{
								"startLifetimes":[]
							},
							"startSpeedType":0,
							"startSpeedConstant":4.5,
							"startSpeedConstantMin":0,
							"startSpeedConstantMax":4.5,
							"threeDStartSize":false,
							"startSizeType":0,
							"startSizeConstant":0.4,
							"startSizeConstantMin":0,
							"startSizeConstantMax":0.4,
							"startSizeConstantSeparate":[
								0.4,
								1,
								1
							],
							"startSizeConstantMinSeparate":[
								0,
								0,
								0
							],
							"startSizeConstantMaxSeparate":[
								0.4,
								1,
								1
							],
							"threeDStartRotation":false,
							"startRotationType":0,
							"startRotationConstant":0,
							"startRotationConstantMin":0,
							"startRotationConstantMax":0,
							"startRotationConstantSeparate":[
								57.29578,
								-57.29578,
								0
							],
							"startRotationConstantMinSeparate":[
								0,
								0,
								0
							],
							"startRotationConstantMaxSeparate":[
								57.29578,
								-57.29578,
								0
							],
							"randomizeRotationDirection":0,
							"startColorType":0,
							"startColorConstant":[
								1,
								1,
								1,
								1
							],
							"startColorConstantMin":[
								0,
								0,
								0,
								0
							],
							"startColorConstantMax":[
								1,
								1,
								1,
								1
							],
							"gravity":[
								0,
								-9.81,
								0
							],
							"gravityModifier":0.02,
							"simulationSpace":1,
							"scaleMode":2,
							"playOnAwake":true,
							"maxParticles":5,
							"autoRandomSeed":true,
							"randomSeed":3.143368E+09,
							"emission":{
								"enable":true,
								"emissionRate":10,
								"emissionRateTip":"Time",
								"bursts":[]
							},
							"shape":{
								"enable":true,
								"shapeType":2,
								"sphereRadius":0.5,
								"sphereEmitFromShell":false,
								"sphereRandomDirection":1,
								"hemiSphereRadius":0.5,
								"hemiSphereEmitFromShell":false,
								"hemiSphereRandomDirection":1,
								"coneAngle":15,
								"coneRadius":0.5,
								"coneLength":5,
								"coneEmitType":0,
								"coneRandomDirection":1,
								"boxX":1,
								"boxY":1,
								"boxZ":1,
								"boxRandomDirection":1,
								"circleRadius":0.5,
								"circleArc":360,
								"circleEmitFromEdge":false,
								"circleRandomDirection":1
							},
							"renderMode":0,
							"stretchedBillboardCameraSpeedScale":0,
							"stretchedBillboardSpeedScale":0,
							"stretchedBillboardLengthScale":2,
							"sortingFudge":0,
							"material":{
								"type":"Laya.ShurikenParticleMaterial",
								"path":"Assets/Materials/run_effect.lmat"
							}
						},
						"components":[],
						"child":[]
					},
					{
						"type":"Sprite3D",
						"props":{
							"name":"model_samurai",
							"active":true,
							"isStatic":false,
							"layer":8,
							"position":[
								0,
								-0.472,
								0
							],
							"rotation":[
								0,
								0.7071068,
								0,
								-0.7071068
							],
							"scale":[
								0.5,
								0.25,
								0.5
							]
						},
						"components":[
							{
								"type":"Animator",
								"avatar":{
									"path":"Assets/Models/model_samurai-model_samurai-model_samuraiAvatar.lav",
									"linkSprites":{}
								},
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[
											{
												"name":"attack_l",
												"clipPath":"Assets/Models/motion_samurai-P_attack_L.lani"
											},
											{
												"name":"attack_r",
												"clipPath":"Assets/Models/motion_samurai-P_attack_R.lani"
											},
											{
												"name":"attack_rot",
												"clipPath":"Assets/Models/motion_samurai-P_attack_Rot.lani"
											},
											{
												"name":"attack_rot_e",
												"clipPath":"Assets/Models/motion_samurai-P_attack_Rot_e.lani"
											},
											{
												"name":"attack_rot_s",
												"clipPath":"Assets/Models/motion_samurai-P_attack_Rot_s.lani"
											},
											{
												"name":"run",
												"clipPath":"Assets/Models/motion_samurai-P_run.lani"
											},
											{
												"name":"stop",
												"clipPath":"Assets/Models/motion_samurai-P_stop.lani"
											},
											{
												"name":"yarare",
												"clipPath":"Assets/Models/motion_samurai-P_yarare.lani"
											}
										]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"chibi",
									"active":true,
									"isStatic":false,
									"layer":8,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0,
										2.840385E-15,
										0,
										-1
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"c_moto_00",
									"boundBox":{
										"min":[
											-0.8236666,
											-0.2291735,
											-0.7436063
										],
										"max":[
											0.8236666,
											1.558977,
											0.9786218
										]
									},
									"boundSphere":{
										"center":[
											0,
											0.6649018,
											0.1175078
										],
										"radius":1.489736
									},
									"materials":[
										{
											"path":"Assets/Models/Materials/samurai_01.lmat"
										},
										{
											"path":"Assets/Models/Materials/samurai_02.lmat"
										},
										{
											"path":"Assets/Models/Materials/chibi.lmat"
										}
									],
									"meshPath":"Assets/Models/model_samurai-chibi.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"dekaino",
									"active":true,
									"isStatic":false,
									"layer":8,
									"position":[
										0,
										1.93,
										0
									],
									"rotation":[
										0,
										2.840385E-15,
										0,
										-1
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":"moto_00",
									"boundBox":{
										"min":[
											-3.275398,
											-1.36929,
											-2.641232
										],
										"max":[
											3.275398,
											4.73125,
											3.832855
										]
									},
									"boundSphere":{
										"center":[
											0,
											1.68098,
											0.5958114
										],
										"radius":5.523661
									},
									"materials":[
										{
											"path":"Assets/Models/Materials/samurai_03.lmat"
										},
										{
											"path":"Assets/Models/Materials/samurai_02.lmat"
										},
										{
											"path":"Assets/Models/Materials/samurai_03.lmat"
										},
										{
											"path":"Assets/Models/Materials/samurai_01.lmat"
										}
									],
									"meshPath":"Assets/Models/model_samurai-dekaino.lm"
								},
								"components":[],
								"child":[]
							}
						]
					}
				]
			}
		]
	}
}