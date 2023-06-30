window.BENCHMARK_DATA = {
  "lastUpdate": 1688110957815,
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
          "id": "562375f5749f1239d08719639d67a1a5f05299b5",
          "message": "Reroute delta access",
          "timestamp": "2023-06-30T14:30:25+09:00",
          "tree_id": "389a47a66d56321adead8d670cdb6acdeb0ffd82",
          "url": "https://github.com/greymistcube/libplanet/commit/562375f5749f1239d08719639d67a1a5f05299b5"
        },
        "date": 1688104171206,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9447744.587628866,
            "unit": "ns",
            "range": "± 834258.1547286832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24900204.20652174,
            "unit": "ns",
            "range": "± 1887716.0908465148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66644566.35135135,
            "unit": "ns",
            "range": "± 2259023.4949515644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137870706.27586207,
            "unit": "ns",
            "range": "± 7504107.512324703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275242323.5555556,
            "unit": "ns",
            "range": "± 9161319.937564503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64220.61111111111,
            "unit": "ns",
            "range": "± 14194.778048135526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357820.3541666667,
            "unit": "ns",
            "range": "± 39673.691052457885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347073.6597938144,
            "unit": "ns",
            "range": "± 54820.83003690419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298937.13402061857,
            "unit": "ns",
            "range": "± 49074.31970377278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5108641.698924731,
            "unit": "ns",
            "range": "± 460146.3471974405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4905916.642857143,
            "unit": "ns",
            "range": "± 375562.84772537136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21410.010869565216,
            "unit": "ns",
            "range": "± 6645.338944041849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107880.18681318681,
            "unit": "ns",
            "range": "± 19102.339935150518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108727.8762886598,
            "unit": "ns",
            "range": "± 29569.4433978649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134134.3404255319,
            "unit": "ns",
            "range": "± 29109.22503652322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6651.163043478261,
            "unit": "ns",
            "range": "± 1330.6165742354917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23662.061855670105,
            "unit": "ns",
            "range": "± 9337.367919430008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713885.2659574468,
            "unit": "ns",
            "range": "± 197597.48240425132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3343480.3368421053,
            "unit": "ns",
            "range": "± 304792.054960239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2270742.610526316,
            "unit": "ns",
            "range": "± 227531.806974429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6659436.021276596,
            "unit": "ns",
            "range": "± 691120.2889862597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7815613.353860294,
            "unit": "ns",
            "range": "± 117779.35508388522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2352709.00390625,
            "unit": "ns",
            "range": "± 39898.73088503787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1683976.7408854167,
            "unit": "ns",
            "range": "± 31304.108898195445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3198349.7921316964,
            "unit": "ns",
            "range": "± 46232.73002909839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1084314.0255629595,
            "unit": "ns",
            "range": "± 34981.68789753615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 981251.586077009,
            "unit": "ns",
            "range": "± 11344.154066642393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3832562.7741935486,
            "unit": "ns",
            "range": "± 361996.4341766825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4061921.442105263,
            "unit": "ns",
            "range": "± 403986.9202800717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5548025.59139785,
            "unit": "ns",
            "range": "± 500819.603302931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4639521.225806451,
            "unit": "ns",
            "range": "± 424774.95125465456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8453481.537634408,
            "unit": "ns",
            "range": "± 661713.6483632044"
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
          "id": "219464a934fb47fbb814412167099159126c623d",
          "message": "Reroute delta access",
          "timestamp": "2023-06-30T15:34:58+09:00",
          "tree_id": "3b24b483247f28bbab75c98f43e67928b1b298f2",
          "url": "https://github.com/greymistcube/libplanet/commit/219464a934fb47fbb814412167099159126c623d"
        },
        "date": 1688110729071,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8228679,
            "unit": "ns",
            "range": "± 120219.80235577472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22561435.6,
            "unit": "ns",
            "range": "± 174532.91444587588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57177620.266666666,
            "unit": "ns",
            "range": "± 471450.8047968929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113607516.85714285,
            "unit": "ns",
            "range": "± 804374.1090198741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229636908.73333332,
            "unit": "ns",
            "range": "± 1621284.8358575483"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49211.27659574468,
            "unit": "ns",
            "range": "± 3183.0111982623553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295400.0961538461,
            "unit": "ns",
            "range": "± 12074.759784497506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283661.0263157895,
            "unit": "ns",
            "range": "± 9700.437795879174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252336.6875,
            "unit": "ns",
            "range": "± 9899.586649776655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4582110,
            "unit": "ns",
            "range": "± 68626.21594551166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4167498.1428571427,
            "unit": "ns",
            "range": "± 46946.11047025849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20354.05376344086,
            "unit": "ns",
            "range": "± 1890.0140864760967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93759.73033707865,
            "unit": "ns",
            "range": "± 5025.806859156694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80771.9375,
            "unit": "ns",
            "range": "± 4823.741205444718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102403.33673469388,
            "unit": "ns",
            "range": "± 14895.572958144985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5892.757894736842,
            "unit": "ns",
            "range": "± 706.8210931931467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19533.212765957447,
            "unit": "ns",
            "range": "± 1501.6876948082459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1551288.1797752809,
            "unit": "ns",
            "range": "± 85398.3109955878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906077.193548387,
            "unit": "ns",
            "range": "± 81459.7620331328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2001451.305263158,
            "unit": "ns",
            "range": "± 131546.91636083348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5363274.531914894,
            "unit": "ns",
            "range": "± 209114.08835431052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6088782.921316965,
            "unit": "ns",
            "range": "± 32671.507089214385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890807.9024832589,
            "unit": "ns",
            "range": "± 1043.3465682525577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401790.2176339286,
            "unit": "ns",
            "range": "± 3369.8249101163856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619815.044791667,
            "unit": "ns",
            "range": "± 1715.9215053130927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841263.4425130208,
            "unit": "ns",
            "range": "± 395.9242815058523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766793.4500651042,
            "unit": "ns",
            "range": "± 294.8628089663104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3708547.125,
            "unit": "ns",
            "range": "± 72086.09393022115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3909848,
            "unit": "ns",
            "range": "± 89253.98071705262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4672391.6,
            "unit": "ns",
            "range": "± 137577.09962119174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4282436.421052632,
            "unit": "ns",
            "range": "± 91215.98300146734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6799488.771428571,
            "unit": "ns",
            "range": "± 222068.6181936043"
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
          "id": "c62216ef6c97a82f8c4bfb96bb7b6555b337d5dd",
          "message": "Changelog",
          "timestamp": "2023-06-30T16:30:25+09:00",
          "tree_id": "06a6a38a48bbd4aec72573ab5b68bc1937e05a4f",
          "url": "https://github.com/greymistcube/libplanet/commit/c62216ef6c97a82f8c4bfb96bb7b6555b337d5dd"
        },
        "date": 1688110950265,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7570364.285714285,
            "unit": "ns",
            "range": "± 12313.468469860218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19269036.57142857,
            "unit": "ns",
            "range": "± 105818.19722648716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48980910.53333333,
            "unit": "ns",
            "range": "± 180817.5478707223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98771955.21428572,
            "unit": "ns",
            "range": "± 458271.29946927534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196066779.2142857,
            "unit": "ns",
            "range": "± 751333.9612252923"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45508.30136986302,
            "unit": "ns",
            "range": "± 2274.4320883643522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273572.4285714286,
            "unit": "ns",
            "range": "± 6402.768911607675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260025.1379310345,
            "unit": "ns",
            "range": "± 7418.871943150589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232380.8,
            "unit": "ns",
            "range": "± 3752.087822609091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4127808.714285714,
            "unit": "ns",
            "range": "± 15807.00735277078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3749907.5714285714,
            "unit": "ns",
            "range": "± 20403.141974156395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15783.935483870968,
            "unit": "ns",
            "range": "± 1271.0437580676996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84464.15,
            "unit": "ns",
            "range": "± 4223.4625158493845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71384.31578947368,
            "unit": "ns",
            "range": "± 1456.5203607926353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89232.30927835051,
            "unit": "ns",
            "range": "± 11468.90841249436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4170.0526315789475,
            "unit": "ns",
            "range": "± 436.7506316214374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16307.569892473119,
            "unit": "ns",
            "range": "± 983.2658249740732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1329942.91,
            "unit": "ns",
            "range": "± 92909.29781962217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2531544.911764706,
            "unit": "ns",
            "range": "± 81484.73005801972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1659192.5882352942,
            "unit": "ns",
            "range": "± 86995.92193388178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4593693.36,
            "unit": "ns",
            "range": "± 118925.44934428459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5941056.150520833,
            "unit": "ns",
            "range": "± 27297.758429761674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860116.546595982,
            "unit": "ns",
            "range": "± 3108.4643826685224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342774.3446614584,
            "unit": "ns",
            "range": "± 2874.3964295622504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552673.1997395833,
            "unit": "ns",
            "range": "± 4421.957094388171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812219.7056640625,
            "unit": "ns",
            "range": "± 1615.9806021218383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732984.8220402644,
            "unit": "ns",
            "range": "± 424.6625599705285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3222472.8421052634,
            "unit": "ns",
            "range": "± 109134.93001748038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3311112.8666666667,
            "unit": "ns",
            "range": "± 28784.439498914457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4244409.666666667,
            "unit": "ns",
            "range": "± 76640.25397145761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3665897.2916666665,
            "unit": "ns",
            "range": "± 82010.84575913496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6195211.619047619,
            "unit": "ns",
            "range": "± 146306.58711981366"
          }
        ]
      }
    ]
  }
}