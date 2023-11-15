window.BENCHMARK_DATA = {
  "lastUpdate": 1688623840801,
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
          "id": "53865623b75169fd62a87bd0c1fbb9e6a4741632",
          "message": "Expose Logs for ActionContext",
          "timestamp": "2023-07-06T14:21:34+09:00",
          "tree_id": "7d248476019cf58680d210b23add1a089dcb8e18",
          "url": "https://github.com/greymistcube/libplanet/commit/53865623b75169fd62a87bd0c1fbb9e6a4741632"
        },
        "date": 1688621892046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439373.7373737374,
            "unit": "ns",
            "range": "± 102931.71858563105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2735942.8571428573,
            "unit": "ns",
            "range": "± 133032.01267933796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1832020,
            "unit": "ns",
            "range": "± 124008.32205700527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4862770.9677419355,
            "unit": "ns",
            "range": "± 137444.81848739248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46755.555555555555,
            "unit": "ns",
            "range": "± 2610.398872233859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7640926.315789473,
            "unit": "ns",
            "range": "± 165210.05095233314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20369107.14285714,
            "unit": "ns",
            "range": "± 253813.77626515474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51507150,
            "unit": "ns",
            "range": "± 538413.0613343111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104582450,
            "unit": "ns",
            "range": "± 2050485.6224806844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207747030,
            "unit": "ns",
            "range": "± 3022500.6494622957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4920548.541666667,
            "unit": "ns",
            "range": "± 29824.408085203737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537876.171875,
            "unit": "ns",
            "range": "± 6222.662984170282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1197811.8098958333,
            "unit": "ns",
            "range": "± 6997.076122948731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676982.7864583335,
            "unit": "ns",
            "range": "± 9447.595328097592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848010.9765625,
            "unit": "ns",
            "range": "± 2650.912571090229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793038.0161830357,
            "unit": "ns",
            "range": "± 2245.569464893034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335176,
            "unit": "ns",
            "range": "± 85335.7793269232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3559440,
            "unit": "ns",
            "range": "± 88617.09027978279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4208841.025641026,
            "unit": "ns",
            "range": "± 145344.81816474034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3820453.5714285714,
            "unit": "ns",
            "range": "± 108761.38503927474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6371592.5,
            "unit": "ns",
            "range": "± 222503.68638548037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280817.64705882355,
            "unit": "ns",
            "range": "± 5197.984620758997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258000,
            "unit": "ns",
            "range": "± 7858.724162009089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225642.62295081967,
            "unit": "ns",
            "range": "± 10112.920102792492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4179928.5714285714,
            "unit": "ns",
            "range": "± 70103.32405782228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794378.5714285714,
            "unit": "ns",
            "range": "± 35261.18324668138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20527.956989247312,
            "unit": "ns",
            "range": "± 1493.1994822468098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97232.98969072165,
            "unit": "ns",
            "range": "± 6876.934904227023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77144.08602150538,
            "unit": "ns",
            "range": "± 4581.2819158527955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95200,
            "unit": "ns",
            "range": "± 10999.290686421356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5394.791666666667,
            "unit": "ns",
            "range": "± 873.0309925971059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18265.217391304348,
            "unit": "ns",
            "range": "± 1528.9466878212968"
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
          "id": "73a2f0860f2e00cc1be3bd877287d3739e6b2225",
          "message": "Changelog",
          "timestamp": "2023-07-06T14:27:12+09:00",
          "tree_id": "feb40a6a7ede078cb6bcd0f76c2bb0bef7b94ca9",
          "url": "https://github.com/greymistcube/libplanet/commit/73a2f0860f2e00cc1be3bd877287d3739e6b2225"
        },
        "date": 1688622342338,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1647064.6464646466,
            "unit": "ns",
            "range": "± 167514.21158908433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3053724.7422680412,
            "unit": "ns",
            "range": "± 278407.70913615753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2030578.7234042552,
            "unit": "ns",
            "range": "± 132376.52381962532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5628666.666666667,
            "unit": "ns",
            "range": "± 401123.60323529167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52853.76344086022,
            "unit": "ns",
            "range": "± 4400.828952046494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8822364.516129032,
            "unit": "ns",
            "range": "± 262145.04197535006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24215636.363636363,
            "unit": "ns",
            "range": "± 391236.7819710968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60439266.666666664,
            "unit": "ns",
            "range": "± 1661770.2342798363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117248892.85714285,
            "unit": "ns",
            "range": "± 1911776.2366908486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241617745,
            "unit": "ns",
            "range": "± 5289129.563695016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5813817.8125,
            "unit": "ns",
            "range": "± 89583.9992970492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1909927.683423913,
            "unit": "ns",
            "range": "± 47429.81937912036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413758.6167279412,
            "unit": "ns",
            "range": "± 27237.192339066176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3172265.285326087,
            "unit": "ns",
            "range": "± 78548.12043299686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001801.3151041666,
            "unit": "ns",
            "range": "± 17813.100379476953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 961034.765625,
            "unit": "ns",
            "range": "± 20487.422840123847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3684690.909090909,
            "unit": "ns",
            "range": "± 184597.7056807146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3835603.4482758623,
            "unit": "ns",
            "range": "± 209075.85662907237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4853585.106382979,
            "unit": "ns",
            "range": "± 301337.1661989013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4258953.846153846,
            "unit": "ns",
            "range": "± 198222.61008532418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7225835.483870967,
            "unit": "ns",
            "range": "± 326397.7032509067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309318.82352941175,
            "unit": "ns",
            "range": "± 16593.734432277855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288264.7727272727,
            "unit": "ns",
            "range": "± 15844.100680838123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261535,
            "unit": "ns",
            "range": "± 21239.20224775903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4823796.428571428,
            "unit": "ns",
            "range": "± 258184.99599272988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4377163.043478261,
            "unit": "ns",
            "range": "± 209294.5974071866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20812.76595744681,
            "unit": "ns",
            "range": "± 1770.8654127929917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95892.47311827957,
            "unit": "ns",
            "range": "± 6716.984257303011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84060.63829787234,
            "unit": "ns",
            "range": "± 8813.48207321383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110163.68421052632,
            "unit": "ns",
            "range": "± 18436.842223542833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6242.708333333333,
            "unit": "ns",
            "range": "± 1078.5706712971835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21044.68085106383,
            "unit": "ns",
            "range": "± 2383.6074143304054"
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
          "id": "c6d4452cfa4074ff724d0872c0d3880c51784cd5",
          "message": "Changelog",
          "timestamp": "2023-07-06T14:53:30+09:00",
          "tree_id": "5039ff1dfd901fe4acdd1536f168d7c4c3ed36da",
          "url": "https://github.com/greymistcube/libplanet/commit/c6d4452cfa4074ff724d0872c0d3880c51784cd5"
        },
        "date": 1688623818763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1385061.224489796,
            "unit": "ns",
            "range": "± 92952.26979660495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2600390.5405405406,
            "unit": "ns",
            "range": "± 128697.45042116917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1826527.4725274725,
            "unit": "ns",
            "range": "± 102245.88235766004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5051533.333333333,
            "unit": "ns",
            "range": "± 290832.97708719946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47955.78947368421,
            "unit": "ns",
            "range": "± 3963.8986769548756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7215638.461538462,
            "unit": "ns",
            "range": "± 89026.15288462093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20337870,
            "unit": "ns",
            "range": "± 173688.8358942097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52310773.684210524,
            "unit": "ns",
            "range": "± 1154203.4506013733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102336646.66666667,
            "unit": "ns",
            "range": "± 1606638.0292251213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206353633.33333334,
            "unit": "ns",
            "range": "± 4061899.0121254716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4905421.145833333,
            "unit": "ns",
            "range": "± 26759.729308408045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1558817.9296875,
            "unit": "ns",
            "range": "± 9383.094498715558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1203980.7942708333,
            "unit": "ns",
            "range": "± 6801.301098281035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661175.1822916665,
            "unit": "ns",
            "range": "± 9001.377431266268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845683.0989583334,
            "unit": "ns",
            "range": "± 3286.836055961194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781681.2630208334,
            "unit": "ns",
            "range": "± 3191.485942384755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3208356.896551724,
            "unit": "ns",
            "range": "± 131694.45779819682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3471077.5,
            "unit": "ns",
            "range": "± 121534.35620095038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4231745,
            "unit": "ns",
            "range": "± 149922.3404949615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3829729.8245614036,
            "unit": "ns",
            "range": "± 165037.44268337617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6272190,
            "unit": "ns",
            "range": "± 174443.43485931834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271374.4186046512,
            "unit": "ns",
            "range": "± 9739.196530448147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258097.22222222222,
            "unit": "ns",
            "range": "± 8481.121425549845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232933.67346938775,
            "unit": "ns",
            "range": "± 14917.482263711758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4123216.6666666665,
            "unit": "ns",
            "range": "± 84288.19085522633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3779528.5714285714,
            "unit": "ns",
            "range": "± 60453.0514413576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20678.72340425532,
            "unit": "ns",
            "range": "± 2132.4866771092616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88363.44086021505,
            "unit": "ns",
            "range": "± 6304.239169800859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76173.1182795699,
            "unit": "ns",
            "range": "± 5309.878811868257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97442.39130434782,
            "unit": "ns",
            "range": "± 13999.358177561566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5348.958333333333,
            "unit": "ns",
            "range": "± 1003.1523777484938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22046.39175257732,
            "unit": "ns",
            "range": "± 2342.3217584122103"
          }
        ]
      }
    ]
  }
}