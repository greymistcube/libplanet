window.BENCHMARK_DATA = {
  "lastUpdate": 1679040586631,
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
          "id": "8bdcf2943248ad564bb640786cccf2405d470018",
          "message": "Implemented IBencodable for BlockCommit",
          "timestamp": "2023-03-17T14:20:23+09:00",
          "tree_id": "76831a6c51a007ca9ff79824232395c3d299955c",
          "url": "https://github.com/greymistcube/libplanet/commit/8bdcf2943248ad564bb640786cccf2405d470018"
        },
        "date": 1679031577642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664503.1914893617,
            "unit": "ns",
            "range": "± 163895.31175574035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3123258.695652174,
            "unit": "ns",
            "range": "± 205724.742031663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2695713.9784946237,
            "unit": "ns",
            "range": "± 170323.26208367903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6497134.065934066,
            "unit": "ns",
            "range": "± 454135.5654720491"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54706.98924731183,
            "unit": "ns",
            "range": "± 6602.1801051764305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8863068.181818182,
            "unit": "ns",
            "range": "± 484524.76836574054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24219172.54901961,
            "unit": "ns",
            "range": "± 971260.0175191876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 61387158.823529415,
            "unit": "ns",
            "range": "± 2499034.360402151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 123239365.51724137,
            "unit": "ns",
            "range": "± 5399186.922626104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 246385182.2222222,
            "unit": "ns",
            "range": "± 9237309.09516818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5957451.171875,
            "unit": "ns",
            "range": "± 113674.35882595595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907687.2265625,
            "unit": "ns",
            "range": "± 30276.392253630256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392776.8489583333,
            "unit": "ns",
            "range": "± 23480.978975428407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3186178.653492647,
            "unit": "ns",
            "range": "± 63208.470703835235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026256.3020833334,
            "unit": "ns",
            "range": "± 14205.971561813858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 940930.7291666666,
            "unit": "ns",
            "range": "± 15804.467092961208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3779250,
            "unit": "ns",
            "range": "± 252383.6868269106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6257287.671232876,
            "unit": "ns",
            "range": "± 307458.3905656564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28399427.586206898,
            "unit": "ns",
            "range": "± 824518.6565057873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7305604.761904762,
            "unit": "ns",
            "range": "± 332045.44356136216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32861650,
            "unit": "ns",
            "range": "± 1005286.181249957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206033.70786516854,
            "unit": "ns",
            "range": "± 13226.582598383802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207064.83516483515,
            "unit": "ns",
            "range": "± 17484.033183491058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186543.6170212766,
            "unit": "ns",
            "range": "± 20240.39163265247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14039051.42857143,
            "unit": "ns",
            "range": "± 677154.7408930042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10978241.237113401,
            "unit": "ns",
            "range": "± 661808.6154547404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25554.639175257733,
            "unit": "ns",
            "range": "± 7658.15225509387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60429.292929292926,
            "unit": "ns",
            "range": "± 10008.366423874642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45772.916666666664,
            "unit": "ns",
            "range": "± 6865.282286781293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118067.02127659574,
            "unit": "ns",
            "range": "± 19235.572100734436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10117,
            "unit": "ns",
            "range": "± 5652.192834500946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25008.08080808081,
            "unit": "ns",
            "range": "± 6945.409242400611"
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
          "id": "573329a37a0f1d1b50a64f53c1b9f4fbf9daebc1",
          "message": "Changelog",
          "timestamp": "2023-03-17T14:24:13+09:00",
          "tree_id": "7ea7e3f86089b040e6aaee7163058da70e2643e0",
          "url": "https://github.com/greymistcube/libplanet/commit/573329a37a0f1d1b50a64f53c1b9f4fbf9daebc1"
        },
        "date": 1679032155897,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1689782.2916666667,
            "unit": "ns",
            "range": "± 177110.0549879957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3205017.525773196,
            "unit": "ns",
            "range": "± 327014.6763431489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2749441.836734694,
            "unit": "ns",
            "range": "± 301313.61335403996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6600036.734693877,
            "unit": "ns",
            "range": "± 633057.1406902529"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63239.36170212766,
            "unit": "ns",
            "range": "± 16946.61585200735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8112615.4639175255,
            "unit": "ns",
            "range": "± 665155.7867867318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22887807.07070707,
            "unit": "ns",
            "range": "± 2060123.171137012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57406397.97979798,
            "unit": "ns",
            "range": "± 3916703.9065035763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 116986096,
            "unit": "ns",
            "range": "± 8848823.090014156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 248305917,
            "unit": "ns",
            "range": "± 16078340.967163682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5834437.890625,
            "unit": "ns",
            "range": "± 170458.76702722057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830735.6085526317,
            "unit": "ns",
            "range": "± 38659.516047919155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1417263.0161830357,
            "unit": "ns",
            "range": "± 39094.600883348365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3021050.643382353,
            "unit": "ns",
            "range": "± 60584.02961847632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1020276.484375,
            "unit": "ns",
            "range": "± 22671.15837854672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934083.8518415178,
            "unit": "ns",
            "range": "± 16351.661611374513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3589494,
            "unit": "ns",
            "range": "± 392179.955555347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5606174.489795919,
            "unit": "ns",
            "range": "± 621945.5351748768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29032053,
            "unit": "ns",
            "range": "± 2260924.196677594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6629365,
            "unit": "ns",
            "range": "± 622486.6764019771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34253315.625,
            "unit": "ns",
            "range": "± 2517481.5899322904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202322.3404255319,
            "unit": "ns",
            "range": "± 25037.739919368945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223131.25,
            "unit": "ns",
            "range": "± 39445.97721467999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182810.41666666666,
            "unit": "ns",
            "range": "± 32854.67676127282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12477056.565656565,
            "unit": "ns",
            "range": "± 1098953.634809747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9750726.315789474,
            "unit": "ns",
            "range": "± 779658.1440183604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27069.38775510204,
            "unit": "ns",
            "range": "± 10706.144378642732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65163.541666666664,
            "unit": "ns",
            "range": "± 16685.405660678545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48581.914893617024,
            "unit": "ns",
            "range": "± 12703.085416128366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121168.0412371134,
            "unit": "ns",
            "range": "± 31140.40297049716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5096.7032967032965,
            "unit": "ns",
            "range": "± 550.6461960381034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24776.76767676768,
            "unit": "ns",
            "range": "± 9048.743607487539"
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
          "id": "1af80b249526dc8def67cc29607c9aeacbe5b853",
          "message": "Changelog",
          "timestamp": "2023-03-17T16:46:28+09:00",
          "tree_id": "7a0907c438012591008e907aab2715fd36c87c2e",
          "url": "https://github.com/greymistcube/libplanet/commit/1af80b249526dc8def67cc29607c9aeacbe5b853"
        },
        "date": 1679040560994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1813361.4583333333,
            "unit": "ns",
            "range": "± 202528.99122934765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3444884.782608696,
            "unit": "ns",
            "range": "± 353918.04475506605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2939894.5054945056,
            "unit": "ns",
            "range": "± 280819.43125338556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7197333.333333333,
            "unit": "ns",
            "range": "± 662186.2243543259"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60548.35164835165,
            "unit": "ns",
            "range": "± 12859.560754874283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9489944.736842105,
            "unit": "ns",
            "range": "± 1003603.7670028033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 25478262.10526316,
            "unit": "ns",
            "range": "± 1807388.1797128513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 64657610.38961039,
            "unit": "ns",
            "range": "± 3287882.9679911695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 134588291.78082192,
            "unit": "ns",
            "range": "± 6674804.973654317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 266254917.39130434,
            "unit": "ns",
            "range": "± 6646527.116448393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6531685.877403846,
            "unit": "ns",
            "range": "± 177817.4506204671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2066685.2469308036,
            "unit": "ns",
            "range": "± 87802.15554927113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1566731.166294643,
            "unit": "ns",
            "range": "± 36395.58708246571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3425150.245949074,
            "unit": "ns",
            "range": "± 92806.13474452269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1141676.668648098,
            "unit": "ns",
            "range": "± 28420.702915642112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1030314.982524671,
            "unit": "ns",
            "range": "± 22403.413647914047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4043609.574468085,
            "unit": "ns",
            "range": "± 551922.2171450536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5965427.083333333,
            "unit": "ns",
            "range": "± 676748.715003414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 32062669.387755103,
            "unit": "ns",
            "range": "± 2063089.9777694661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7717722.222222222,
            "unit": "ns",
            "range": "± 826270.1111496626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38061061.11111111,
            "unit": "ns",
            "range": "± 1875065.2961817696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233956.84210526315,
            "unit": "ns",
            "range": "± 39321.434933643526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246598.97959183675,
            "unit": "ns",
            "range": "± 49756.01811996433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188839.58333333334,
            "unit": "ns",
            "range": "± 35728.69252153297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14151609.278350515,
            "unit": "ns",
            "range": "± 1454594.0174640422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11365778.125,
            "unit": "ns",
            "range": "± 1102470.7603906996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24247.191011235955,
            "unit": "ns",
            "range": "± 6406.2308072908145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67154.25531914894,
            "unit": "ns",
            "range": "± 13605.933753714049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45857.89473684211,
            "unit": "ns",
            "range": "± 10360.056055744268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127717.8947368421,
            "unit": "ns",
            "range": "± 32180.177521386526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5747.252747252747,
            "unit": "ns",
            "range": "± 871.8232057451226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26218.367346938776,
            "unit": "ns",
            "range": "± 9447.288346439864"
          }
        ]
      }
    ]
  }
}