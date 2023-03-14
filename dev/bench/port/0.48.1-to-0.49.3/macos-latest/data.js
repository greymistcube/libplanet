window.BENCHMARK_DATA = {
  "lastUpdate": 1678785180561,
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
          "id": "c34cc82e18265600663ca1a3145961e639934c5b",
          "message": "Merge tag '0.48.1' into port/0.48.1-to-0.49.3\n\nLibplanet 0.48.1",
          "timestamp": "2023-03-14T17:42:43+09:00",
          "tree_id": "730b09276955c28f464a1ee14c8717eaf443750e",
          "url": "https://github.com/greymistcube/libplanet/commit/c34cc82e18265600663ca1a3145961e639934c5b"
        },
        "date": 1678784615744,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 148394.1403508772,
            "unit": "ns",
            "range": "± 6435.073394071953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 127542.64444444445,
            "unit": "ns",
            "range": "± 13234.486546210346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230372.96907216494,
            "unit": "ns",
            "range": "± 27071.094212913707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222962.62886597938,
            "unit": "ns",
            "range": "± 29045.268646660134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3789564.4507042253,
            "unit": "ns",
            "range": "± 185821.59220059813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10437622.184615385,
            "unit": "ns",
            "range": "± 485148.4075205716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20430.840206185567,
            "unit": "ns",
            "range": "± 5110.038033710785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57859.97872340425,
            "unit": "ns",
            "range": "± 10240.530804380036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56565.989583333336,
            "unit": "ns",
            "range": "± 10097.579430103968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130401.68085106384,
            "unit": "ns",
            "range": "± 30344.489522674005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7656.894736842105,
            "unit": "ns",
            "range": "± 1401.2976772588872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25615.510638297874,
            "unit": "ns",
            "range": "± 4671.003427679215"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7521660.145751953,
            "unit": "ns",
            "range": "± 1041286.3603550025"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8866715.191489361,
            "unit": "ns",
            "range": "± 1607954.3571019752"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 37398896.6,
            "unit": "ns",
            "range": "± 7989045.418993392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8354914.25,
            "unit": "ns",
            "range": "± 1704824.8350308128"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33428668.425287355,
            "unit": "ns",
            "range": "± 2070457.714630223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7474169.6471619895,
            "unit": "ns",
            "range": "± 295333.8848133477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2273827.9321818524,
            "unit": "ns",
            "range": "± 121066.87713910476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397701.1717122395,
            "unit": "ns",
            "range": "± 16752.67544514682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2941283.865234375,
            "unit": "ns",
            "range": "± 32763.862717597516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873737.8526506696,
            "unit": "ns",
            "range": "± 28557.344915186124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765954.1776592548,
            "unit": "ns",
            "range": "± 8913.626878895317"
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
          "id": "79d24eec8784b4888a8d7fb937a909c877984a97",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:53:04+09:00",
          "tree_id": "e623588ac47fe7b2f529547a09aa2fb5131010e5",
          "url": "https://github.com/greymistcube/libplanet/commit/79d24eec8784b4888a8d7fb937a909c877984a97"
        },
        "date": 1678785072941,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 149810.43258426967,
            "unit": "ns",
            "range": "± 8948.761696709462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 144734.22340425532,
            "unit": "ns",
            "range": "± 40541.835459668095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240827.8152173913,
            "unit": "ns",
            "range": "± 34605.01824020673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212010.68367346938,
            "unit": "ns",
            "range": "± 29605.74917195859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3674497.45,
            "unit": "ns",
            "range": "± 83567.96983450373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10648467.823529411,
            "unit": "ns",
            "range": "± 338237.2251449055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24153.13440860215,
            "unit": "ns",
            "range": "± 3802.9369022219444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59189.416666666664,
            "unit": "ns",
            "range": "± 5957.572274300059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61647.82474226804,
            "unit": "ns",
            "range": "± 7224.123035027487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130211.0306122449,
            "unit": "ns",
            "range": "± 17896.00118854182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8854.484210526316,
            "unit": "ns",
            "range": "± 1028.6401978646052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23375.010638297874,
            "unit": "ns",
            "range": "± 3919.9084714590977"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5910868.7588383835,
            "unit": "ns",
            "range": "± 674490.9816569041"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6766456.785714285,
            "unit": "ns",
            "range": "± 559200.6376101634"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28479804.325,
            "unit": "ns",
            "range": "± 1483119.6443520775"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7629826.068181818,
            "unit": "ns",
            "range": "± 283658.9367649522"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34459240.244444445,
            "unit": "ns",
            "range": "± 2351837.627487265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6251292.787533968,
            "unit": "ns",
            "range": "± 154919.8180695902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1999198.4354166666,
            "unit": "ns",
            "range": "± 12351.872201780436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299328.76171875,
            "unit": "ns",
            "range": "± 10053.063205024604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617943.2510516825,
            "unit": "ns",
            "range": "± 41124.57270462523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794735.6779597356,
            "unit": "ns",
            "range": "± 2886.234587858833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787314.2243840144,
            "unit": "ns",
            "range": "± 4855.228101920912"
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
          "id": "911924dfab30f8dfbcf2776e00458824eae03803",
          "message": "Changelog",
          "timestamp": "2023-03-14T17:54:34+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/greymistcube/libplanet/commit/911924dfab30f8dfbcf2776e00458824eae03803"
        },
        "date": 1678785150923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 131999.11956521738,
            "unit": "ns",
            "range": "± 11920.043554793936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111256.88775510204,
            "unit": "ns",
            "range": "± 14039.198100930413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223760.86021505378,
            "unit": "ns",
            "range": "± 26560.7588512073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215954.13541666666,
            "unit": "ns",
            "range": "± 20390.211123875255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3692615.3387096776,
            "unit": "ns",
            "range": "± 110570.32199769121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10119274.454545455,
            "unit": "ns",
            "range": "± 314665.4936568644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19076.731958762888,
            "unit": "ns",
            "range": "± 2581.432190969223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53358.385416666664,
            "unit": "ns",
            "range": "± 6032.012935156086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52364.4375,
            "unit": "ns",
            "range": "± 5364.0232128162515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123658.60416666667,
            "unit": "ns",
            "range": "± 15404.791257732064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7177.216494845361,
            "unit": "ns",
            "range": "± 1103.2173235851674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20515.397959183672,
            "unit": "ns",
            "range": "± 3290.523896775941"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4884477.83453125,
            "unit": "ns",
            "range": "± 309773.9285267134"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5897879.44,
            "unit": "ns",
            "range": "± 390851.0850045174"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27883446.951219514,
            "unit": "ns",
            "range": "± 987525.0173521668"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6912586.15,
            "unit": "ns",
            "range": "± 516129.1017287641"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30898686.305084746,
            "unit": "ns",
            "range": "± 1305525.5821342773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6588716.467447917,
            "unit": "ns",
            "range": "± 107356.55589643239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2023498.294642857,
            "unit": "ns",
            "range": "± 12149.024409760863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296100.63359375,
            "unit": "ns",
            "range": "± 18315.524475913084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2516252.3089717743,
            "unit": "ns",
            "range": "± 65763.12947240121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795005.8168247768,
            "unit": "ns",
            "range": "± 11116.208008949328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725461.5039813702,
            "unit": "ns",
            "range": "± 2942.906370941707"
          }
        ]
      }
    ]
  }
}