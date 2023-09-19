window.BENCHMARK_DATA = {
  "lastUpdate": 1695088769686,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "86231891c004ef7bec83a29f3f51478f5228fd50",
          "message": "Use HashDigest instead of IAccount",
          "timestamp": "2023-09-19T09:40:37+09:00",
          "tree_id": "c1b09f4047d1684df6c3011fc1869c6becd44299",
          "url": "https://github.com/greymistcube/libplanet/commit/86231891c004ef7bec83a29f3f51478f5228fd50"
        },
        "date": 1695085315426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640753.5353535353,
            "unit": "ns",
            "range": "± 303075.56352626235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2938932.6315789474,
            "unit": "ns",
            "range": "± 363239.5204861403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1978570.1030927836,
            "unit": "ns",
            "range": "± 286154.6224526714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5547664.948453608,
            "unit": "ns",
            "range": "± 890918.3417548758"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59061.458333333336,
            "unit": "ns",
            "range": "± 14664.302303942164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8005300,
            "unit": "ns",
            "range": "± 736452.6123365924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21655583.83838384,
            "unit": "ns",
            "range": "± 2082731.6168184804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59602912.24489796,
            "unit": "ns",
            "range": "± 4304854.4751261305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121779435.35353535,
            "unit": "ns",
            "range": "± 8453492.840823833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240201179,
            "unit": "ns",
            "range": "± 16129567.741277594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5171294.034090909,
            "unit": "ns",
            "range": "± 124540.29258216711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1632874.9660326086,
            "unit": "ns",
            "range": "± 40381.140007821195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1215640.0146484375,
            "unit": "ns",
            "range": "± 30931.587572638557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3115687.8392269737,
            "unit": "ns",
            "range": "± 68384.07376069555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010211.3064236111,
            "unit": "ns",
            "range": "± 28145.789286608626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915695.166015625,
            "unit": "ns",
            "range": "± 13042.309728049462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3241796.7032967033,
            "unit": "ns",
            "range": "± 300730.7479570202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3520540.860215054,
            "unit": "ns",
            "range": "± 346775.38659350964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4745674.736842105,
            "unit": "ns",
            "range": "± 582632.2954449132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4031064.5161290322,
            "unit": "ns",
            "range": "± 390173.8298906743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7186107.291666667,
            "unit": "ns",
            "range": "± 727855.1556666218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300361.82795698923,
            "unit": "ns",
            "range": "± 41355.07920401169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299091.8367346939,
            "unit": "ns",
            "range": "± 47221.11984566041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241733.33333333334,
            "unit": "ns",
            "range": "± 31648.03838049578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4536548.421052632,
            "unit": "ns",
            "range": "± 431037.5349857937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3845906.3829787234,
            "unit": "ns",
            "range": "± 369106.45514219423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29362,
            "unit": "ns",
            "range": "± 11539.845595311766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103415.46391752578,
            "unit": "ns",
            "range": "± 19241.59091333897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100587.09677419355,
            "unit": "ns",
            "range": "± 23157.988694891166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114701.03092783505,
            "unit": "ns",
            "range": "± 28184.062040323137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6893.589743589743,
            "unit": "ns",
            "range": "± 1965.4377089964942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27956.701030927834,
            "unit": "ns",
            "range": "± 10831.175174933838"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "22278b2f685b047b90c1d0e7d91c565e35236b59",
          "message": "Use HashDigest instead of IAccount",
          "timestamp": "2023-09-19T09:49:30+09:00",
          "tree_id": "bbc406acfa1d2e0ed2fd9c70074284587684575b",
          "url": "https://github.com/greymistcube/libplanet/commit/22278b2f685b047b90c1d0e7d91c565e35236b59"
        },
        "date": 1695085779342,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1632061.224489796,
            "unit": "ns",
            "range": "± 117164.45894435002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3093868.1818181816,
            "unit": "ns",
            "range": "± 97323.38315682882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2004465.2173913044,
            "unit": "ns",
            "range": "± 139303.43229584393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5486305.263157895,
            "unit": "ns",
            "range": "± 322198.8223786941"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58818.88888888889,
            "unit": "ns",
            "range": "± 3293.299102158753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9730229.310344828,
            "unit": "ns",
            "range": "± 426649.2519781924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24886386.666666668,
            "unit": "ns",
            "range": "± 241868.28135125432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62185878.571428575,
            "unit": "ns",
            "range": "± 396947.32731099305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125977202.63157895,
            "unit": "ns",
            "range": "± 2169233.355452879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252908377.27272728,
            "unit": "ns",
            "range": "± 6112749.374418918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5578322.109375,
            "unit": "ns",
            "range": "± 59044.598188257245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1761292.1614583333,
            "unit": "ns",
            "range": "± 18850.565948875417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1285929.9386160714,
            "unit": "ns",
            "range": "± 9598.331021589831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3151978.6658653845,
            "unit": "ns",
            "range": "± 17704.715237578363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015886.1328125,
            "unit": "ns",
            "range": "± 7076.840107260246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937980.5873325893,
            "unit": "ns",
            "range": "± 8599.980044655566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4054807.1428571427,
            "unit": "ns",
            "range": "± 87941.63730240967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4316708,
            "unit": "ns",
            "range": "± 94874.5703547584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5167792,
            "unit": "ns",
            "range": "± 133172.12208266414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4588368.292682927,
            "unit": "ns",
            "range": "± 164504.0750848203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7305853.846153846,
            "unit": "ns",
            "range": "± 239840.53018417954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297242.85714285716,
            "unit": "ns",
            "range": "± 10835.204966527705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291044.18604651163,
            "unit": "ns",
            "range": "± 10677.954644646792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271317.7083333333,
            "unit": "ns",
            "range": "± 17807.402333043334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4984818.181818182,
            "unit": "ns",
            "range": "± 122267.66650561085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4611269.230769231,
            "unit": "ns",
            "range": "± 58541.030975652524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25041.836734693876,
            "unit": "ns",
            "range": "± 2676.1614096678504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101281.25,
            "unit": "ns",
            "range": "± 6595.713320826362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99430.30303030302,
            "unit": "ns",
            "range": "± 9097.448112088003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101190.72164948453,
            "unit": "ns",
            "range": "± 15598.2109182046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6705.154639175258,
            "unit": "ns",
            "range": "± 1009.6793152222289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23827.472527472528,
            "unit": "ns",
            "range": "± 1675.3152893355086"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "d4f6077e3af48c1eea5f1c5a23b3041c0617605a",
          "message": "Changelog",
          "timestamp": "2023-09-19T10:36:30+09:00",
          "tree_id": "15cb617948f85d7aaab0ab64dcea007e69a2e0fe",
          "url": "https://github.com/greymistcube/libplanet/commit/d4f6077e3af48c1eea5f1c5a23b3041c0617605a"
        },
        "date": 1695088499216,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1335359,
            "unit": "ns",
            "range": "± 84043.33910236282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2521314.084507042,
            "unit": "ns",
            "range": "± 122127.96602132962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1723062.8865979381,
            "unit": "ns",
            "range": "± 103929.16590117563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4530936.111111111,
            "unit": "ns",
            "range": "± 222552.24884586918"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48558.51063829787,
            "unit": "ns",
            "range": "± 3046.8884030672702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7201342.307692308,
            "unit": "ns",
            "range": "± 76255.69335617353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20699793.333333332,
            "unit": "ns",
            "range": "± 337043.7264270165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52064704,
            "unit": "ns",
            "range": "± 1334100.9880190229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103417973.91304348,
            "unit": "ns",
            "range": "± 2593722.720026072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203832017.6470588,
            "unit": "ns",
            "range": "± 4131352.2839433723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4601034.947916667,
            "unit": "ns",
            "range": "± 21257.52274698727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1434384.2578125,
            "unit": "ns",
            "range": "± 3496.27036212798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1057417.4479166667,
            "unit": "ns",
            "range": "± 2981.2809832389976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655204.0885416665,
            "unit": "ns",
            "range": "± 7940.655722193096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834804.2708333334,
            "unit": "ns",
            "range": "± 2216.86719421031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758685.0725446428,
            "unit": "ns",
            "range": "± 1668.0390175034684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3262086.5384615385,
            "unit": "ns",
            "range": "± 134305.0187093837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3545148.5714285714,
            "unit": "ns",
            "range": "± 116160.60477132656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4174931.25,
            "unit": "ns",
            "range": "± 80368.35794224823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3808533.3333333335,
            "unit": "ns",
            "range": "± 113487.77340596511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5964365.7894736845,
            "unit": "ns",
            "range": "± 192987.35328445298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257544.11764705883,
            "unit": "ns",
            "range": "± 12086.80521907518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246303.50877192983,
            "unit": "ns",
            "range": "± 10698.8978890398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219462.5,
            "unit": "ns",
            "range": "± 10680.776960449704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4131905.882352941,
            "unit": "ns",
            "range": "± 84507.55491809767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3751071.4285714286,
            "unit": "ns",
            "range": "± 61860.24482743251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20008.79120879121,
            "unit": "ns",
            "range": "± 1735.1047583902603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86906.12244897959,
            "unit": "ns",
            "range": "± 6276.072485282637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69951.08695652174,
            "unit": "ns",
            "range": "± 3909.7088103037117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87401.05263157895,
            "unit": "ns",
            "range": "± 12792.921037332062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5719.791666666667,
            "unit": "ns",
            "range": "± 898.1407452318452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21152.083333333332,
            "unit": "ns",
            "range": "± 2291.1720359339265"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "0fd63b707195acad0f115782cea32403441527ef",
          "message": "Changelog",
          "timestamp": "2023-09-19T10:40:20+09:00",
          "tree_id": "e79f208a94880406de3d65f93e0d362d8e27ac23",
          "url": "https://github.com/greymistcube/libplanet/commit/0fd63b707195acad0f115782cea32403441527ef"
        },
        "date": 1695088742367,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1290700,
            "unit": "ns",
            "range": "± 105544.54768670787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2443403.846153846,
            "unit": "ns",
            "range": "± 125318.21567441893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1625399.494949495,
            "unit": "ns",
            "range": "± 104665.18179583202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4439212,
            "unit": "ns",
            "range": "± 265865.4813960996"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46785.71428571428,
            "unit": "ns",
            "range": "± 2648.2099374890718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7125486.666666667,
            "unit": "ns",
            "range": "± 21694.629574642484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20174062.903225806,
            "unit": "ns",
            "range": "± 613997.5758594576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50964933.333333336,
            "unit": "ns",
            "range": "± 825612.8664441315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99393705.88235295,
            "unit": "ns",
            "range": "± 1796382.1671872148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200496340,
            "unit": "ns",
            "range": "± 2835916.97888758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4584830.636160715,
            "unit": "ns",
            "range": "± 28872.781594656088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1427063.9583333333,
            "unit": "ns",
            "range": "± 5796.557542626186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1051765.5970982143,
            "unit": "ns",
            "range": "± 4204.044039657411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643360.5989583335,
            "unit": "ns",
            "range": "± 11537.791060497122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829901.7317708334,
            "unit": "ns",
            "range": "± 5199.129276613007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763590.2213541666,
            "unit": "ns",
            "range": "± 3455.430691946056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3105025,
            "unit": "ns",
            "range": "± 117156.13967620215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3279203.703703704,
            "unit": "ns",
            "range": "± 88891.56091069388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3979757.4468085105,
            "unit": "ns",
            "range": "± 154212.38847303056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3602124.4680851065,
            "unit": "ns",
            "range": "± 138722.92131860342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5841086.046511628,
            "unit": "ns",
            "range": "± 216012.98085046312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244394.23076923078,
            "unit": "ns",
            "range": "± 9273.373510186402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236468.18181818182,
            "unit": "ns",
            "range": "± 4359.815020501101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206450.98039215687,
            "unit": "ns",
            "range": "± 8415.090553262506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3944425,
            "unit": "ns",
            "range": "± 72708.74775431083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3641200,
            "unit": "ns",
            "range": "± 67488.25294608156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19888.659793814433,
            "unit": "ns",
            "range": "± 1406.7453785733426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80220.61855670103,
            "unit": "ns",
            "range": "± 5423.251218602059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67513.88888888889,
            "unit": "ns",
            "range": "± 1997.7348283604717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74173.33333333333,
            "unit": "ns",
            "range": "± 10037.825092332985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4667.34693877551,
            "unit": "ns",
            "range": "± 678.6547503297767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17018.279569892475,
            "unit": "ns",
            "range": "± 1653.1883711653477"
          }
        ]
      }
    ]
  }
}