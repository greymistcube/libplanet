window.BENCHMARK_DATA = {
  "lastUpdate": 1684396277798,
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
          "id": "aef86503e565e1d28a3e2e8bf517c061cc31ebae",
          "message": "Require ActionEvaluator for Create",
          "timestamp": "2023-05-17T14:45:39+09:00",
          "tree_id": "62175bf7f8fa04bb04747b339acf8468137b30ac",
          "url": "https://github.com/greymistcube/libplanet/commit/aef86503e565e1d28a3e2e8bf517c061cc31ebae"
        },
        "date": 1684303146405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3591405.1142857145,
            "unit": "ns",
            "range": "± 115104.47766262856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3671217.45,
            "unit": "ns",
            "range": "± 83536.01991166193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4515203.05882353,
            "unit": "ns",
            "range": "± 80201.76548124626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4579960.333333333,
            "unit": "ns",
            "range": "± 138061.70765699903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7235716.521739131,
            "unit": "ns",
            "range": "± 275360.415407455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288686.7619047619,
            "unit": "ns",
            "range": "± 6541.777066705667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276401.037037037,
            "unit": "ns",
            "range": "± 10840.502148368916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253011.32835820896,
            "unit": "ns",
            "range": "± 12022.506961866275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4496666.8,
            "unit": "ns",
            "range": "± 57201.01447801678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4078691.4,
            "unit": "ns",
            "range": "± 57285.78467124283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20242.41304347826,
            "unit": "ns",
            "range": "± 1932.4797777096064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90197.10752688172,
            "unit": "ns",
            "range": "± 5457.633119853422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79390.01020408163,
            "unit": "ns",
            "range": "± 5298.919692457256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99760.57142857143,
            "unit": "ns",
            "range": "± 13056.600133708102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5432.673469387755,
            "unit": "ns",
            "range": "± 960.3069824415439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17490.197802197803,
            "unit": "ns",
            "range": "± 1490.414052982744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5910297.619977678,
            "unit": "ns",
            "range": "± 30615.511297625268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834931.75625,
            "unit": "ns",
            "range": "± 2601.4671609275106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375229.4416666667,
            "unit": "ns",
            "range": "± 3294.338968937374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631000.3471354167,
            "unit": "ns",
            "range": "± 3336.148805620792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812692.2992838542,
            "unit": "ns",
            "range": "± 627.5357293689308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751783.5945870535,
            "unit": "ns",
            "range": "± 288.6084661406935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7893357.846153846,
            "unit": "ns",
            "range": "± 214798.42456399763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21410957.4,
            "unit": "ns",
            "range": "± 349692.3372884472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55430421.86666667,
            "unit": "ns",
            "range": "± 472011.0674635964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111099288.13333334,
            "unit": "ns",
            "range": "± 681080.0563685454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220959229.46666667,
            "unit": "ns",
            "range": "± 1953086.5620717183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484605.252631579,
            "unit": "ns",
            "range": "± 81534.36194674709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2790711.625,
            "unit": "ns",
            "range": "± 70832.80735513582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2606299.076923077,
            "unit": "ns",
            "range": "± 42549.053368752204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5642521.8125,
            "unit": "ns",
            "range": "± 173948.00368212326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47944.28571428572,
            "unit": "ns",
            "range": "± 2577.186467071896"
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
          "id": "019cec3f7bda839dad81edfbe748d79d5f713218",
          "message": "Changelog",
          "timestamp": "2023-05-18T11:30:00+09:00",
          "tree_id": "1ed9e4e1d49ea8bca1a5e15c47da5942f1998376",
          "url": "https://github.com/greymistcube/libplanet/commit/019cec3f7bda839dad81edfbe748d79d5f713218"
        },
        "date": 1684377720922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3148953.6,
            "unit": "ns",
            "range": "± 40270.01638014495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3257371.103448276,
            "unit": "ns",
            "range": "± 73287.31757431783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4112135.789473684,
            "unit": "ns",
            "range": "± 89441.42852515206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4030582.5,
            "unit": "ns",
            "range": "± 61244.012482614075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6544630.172413793,
            "unit": "ns",
            "range": "± 189754.64824874495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264944.96153846156,
            "unit": "ns",
            "range": "± 10933.13811571569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250866.8536585366,
            "unit": "ns",
            "range": "± 6906.877096637001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225299,
            "unit": "ns",
            "range": "± 1655.7978942693055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4059854.214285714,
            "unit": "ns",
            "range": "± 23342.608453471687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3734341.4285714286,
            "unit": "ns",
            "range": "± 30326.469818433397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15166.63440860215,
            "unit": "ns",
            "range": "± 1040.944750496292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79580.26388888889,
            "unit": "ns",
            "range": "± 3575.9044477618095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68826.20588235294,
            "unit": "ns",
            "range": "± 1921.6096437608373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69662.81609195402,
            "unit": "ns",
            "range": "± 6015.1045778160515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3982.0224719101125,
            "unit": "ns",
            "range": "± 308.0590991679744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15159.680412371134,
            "unit": "ns",
            "range": "± 913.3302221630985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5827915.09375,
            "unit": "ns",
            "range": "± 27156.33657058726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956920.8445870536,
            "unit": "ns",
            "range": "± 4306.433701891938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342337.7803385416,
            "unit": "ns",
            "range": "± 2309.6695138910436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2506046.220703125,
            "unit": "ns",
            "range": "± 14068.677513001823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793814.8707449777,
            "unit": "ns",
            "range": "± 826.0756034372936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722908.1347005208,
            "unit": "ns",
            "range": "± 1997.4932583230645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7483431.933333334,
            "unit": "ns",
            "range": "± 13732.036309649193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18726385.133333333,
            "unit": "ns",
            "range": "± 75596.2762762697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47786933.46666667,
            "unit": "ns",
            "range": "± 248916.68606408013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96384690.2,
            "unit": "ns",
            "range": "± 829890.7496810477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191947510.2,
            "unit": "ns",
            "range": "± 729709.0646048308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1286505.6421052632,
            "unit": "ns",
            "range": "± 81129.11860638739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2456218.189189189,
            "unit": "ns",
            "range": "± 82934.5956253875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2052259.7088607594,
            "unit": "ns",
            "range": "± 105643.65356951981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5006769.129032258,
            "unit": "ns",
            "range": "± 121390.44705377822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45396.0253164557,
            "unit": "ns",
            "range": "± 2353.4283937437026"
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
          "id": "6a933493117f5d312e88d78a6f1f5f0d9c9ff750",
          "message": "Changelog",
          "timestamp": "2023-05-18T14:47:48+09:00",
          "tree_id": "fa568b43d104e92b6d0f1e07f7ce0b92e502509c",
          "url": "https://github.com/greymistcube/libplanet/commit/6a933493117f5d312e88d78a6f1f5f0d9c9ff750"
        },
        "date": 1684389616219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3192885.242424242,
            "unit": "ns",
            "range": "± 92719.96536177844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3417434.28,
            "unit": "ns",
            "range": "± 65331.74941437994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4285353.05,
            "unit": "ns",
            "range": "± 95358.59904066003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4151394,
            "unit": "ns",
            "range": "± 172788.56006881315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6822456.7105263155,
            "unit": "ns",
            "range": "± 232596.2660036912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276165.18604651163,
            "unit": "ns",
            "range": "± 8856.879484483112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270758.3829787234,
            "unit": "ns",
            "range": "± 10510.313077191067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232365.73684210525,
            "unit": "ns",
            "range": "± 4266.287975930276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4226462.133333334,
            "unit": "ns",
            "range": "± 38514.09688091337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3845339.285714286,
            "unit": "ns",
            "range": "± 27882.882227214304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17128.563829787236,
            "unit": "ns",
            "range": "± 1366.8711666446586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86564.84090909091,
            "unit": "ns",
            "range": "± 4737.467342892602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71985.76470588235,
            "unit": "ns",
            "range": "± 1449.1476602391044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88055.12244897959,
            "unit": "ns",
            "range": "± 11603.987914101981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4130.15625,
            "unit": "ns",
            "range": "± 423.26429041377173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16791.618556701033,
            "unit": "ns",
            "range": "± 1323.0095067945388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5885104.668870192,
            "unit": "ns",
            "range": "± 14321.448191969352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864759.8548177083,
            "unit": "ns",
            "range": "± 3320.3605084641144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340391.1389322917,
            "unit": "ns",
            "range": "± 689.1527018009986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577199.7701322115,
            "unit": "ns",
            "range": "± 879.0347614595012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791877.3011300223,
            "unit": "ns",
            "range": "± 699.6544172867516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736775.1295572916,
            "unit": "ns",
            "range": "± 509.8534900382975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7573965.692307692,
            "unit": "ns",
            "range": "± 29599.57590457622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19229883.533333335,
            "unit": "ns",
            "range": "± 170753.23479632684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49558693.06666667,
            "unit": "ns",
            "range": "± 351715.22844086454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99009692.86666666,
            "unit": "ns",
            "range": "± 717940.6448215883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198449706.85714287,
            "unit": "ns",
            "range": "± 2054292.5176983722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1331448.2795698924,
            "unit": "ns",
            "range": "± 73202.1335545811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2593303.1923076925,
            "unit": "ns",
            "range": "± 107023.04143666656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2162558.2,
            "unit": "ns",
            "range": "± 115914.6617877794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5307877.777777778,
            "unit": "ns",
            "range": "± 201965.57497896976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45146.9875,
            "unit": "ns",
            "range": "± 2356.8671949274776"
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
          "id": "0d059fc7d1498f965904b79e80172151159de73e",
          "message": "Changelog",
          "timestamp": "2023-05-18T16:36:44+09:00",
          "tree_id": "aed38fe6d984592006142f2634a8c3fadb30ca1e",
          "url": "https://github.com/greymistcube/libplanet/commit/0d059fc7d1498f965904b79e80172151159de73e"
        },
        "date": 1684396270486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3736057.2545454544,
            "unit": "ns",
            "range": "± 157639.21082828232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3887896.1739130435,
            "unit": "ns",
            "range": "± 185743.2802842768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4828199.326086956,
            "unit": "ns",
            "range": "± 184193.33312751752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4761373.645569621,
            "unit": "ns",
            "range": "± 244482.0458583368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7574668.304347826,
            "unit": "ns",
            "range": "± 288472.84892496053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302076.84,
            "unit": "ns",
            "range": "± 12109.362199217461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284874.8604651163,
            "unit": "ns",
            "range": "± 10494.876256856634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247010.85714285713,
            "unit": "ns",
            "range": "± 11565.781945388802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4707240.315789473,
            "unit": "ns",
            "range": "± 99089.93198832207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4472614.352941177,
            "unit": "ns",
            "range": "± 91415.61603190479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21608.98901098901,
            "unit": "ns",
            "range": "± 1848.1536281411331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96075.39361702128,
            "unit": "ns",
            "range": "± 6679.842870822902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79212.15463917526,
            "unit": "ns",
            "range": "± 4675.64406067096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106913.96470588235,
            "unit": "ns",
            "range": "± 7693.073199231857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5990.783505154639,
            "unit": "ns",
            "range": "± 854.0672693403133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20721.263157894737,
            "unit": "ns",
            "range": "± 2389.7624479581173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6125719.615104167,
            "unit": "ns",
            "range": "± 39250.75180253167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895401.6352864583,
            "unit": "ns",
            "range": "± 5532.018159630368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397831.2727864583,
            "unit": "ns",
            "range": "± 6940.891380986371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2714818.563895089,
            "unit": "ns",
            "range": "± 2507.652017832079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841650.5168805803,
            "unit": "ns",
            "range": "± 1441.4763378502862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777420.8724888393,
            "unit": "ns",
            "range": "± 732.3217654341785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7964695.307692308,
            "unit": "ns",
            "range": "± 101346.02704134042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23626443.933333334,
            "unit": "ns",
            "range": "± 320960.77684630087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60413265.8,
            "unit": "ns",
            "range": "± 708911.5812472365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125972164.7,
            "unit": "ns",
            "range": "± 3644008.8536759866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246929863.73333332,
            "unit": "ns",
            "range": "± 4267376.905486043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1489018.1333333333,
            "unit": "ns",
            "range": "± 82761.012402804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2933434.7848101268,
            "unit": "ns",
            "range": "± 151838.22639561462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2418897.6413043477,
            "unit": "ns",
            "range": "± 135707.16715495015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6271281.51,
            "unit": "ns",
            "range": "± 458461.8756759309"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50341.58974358974,
            "unit": "ns",
            "range": "± 2453.0112077501776"
          }
        ]
      }
    ]
  }
}