window.BENCHMARK_DATA = {
  "lastUpdate": 1684212224296,
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
          "id": "67095a318905220de755f1bdc333bf41106d38a8",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:26:31+09:00",
          "tree_id": "9b93bd801f7c90769d2c2ecbc0ee7ad86ce2f3d1",
          "url": "https://github.com/greymistcube/libplanet/commit/67095a318905220de755f1bdc333bf41106d38a8"
        },
        "date": 1684212044931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7634581.754545455,
            "unit": "ns",
            "range": "± 286696.43626886496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19432237.666666668,
            "unit": "ns",
            "range": "± 734815.5957808548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46660515.884615384,
            "unit": "ns",
            "range": "± 1218632.825597869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95182530.58333333,
            "unit": "ns",
            "range": "± 2420737.778350532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197208279.85185185,
            "unit": "ns",
            "range": "± 5410179.905243488"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59182.61052631579,
            "unit": "ns",
            "range": "± 6626.201415423497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312418.57608695654,
            "unit": "ns",
            "range": "± 22095.777622215763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285760.3142857143,
            "unit": "ns",
            "range": "± 12870.311455914993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280342.3052631579,
            "unit": "ns",
            "range": "± 18865.999052710853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3987676.5454545454,
            "unit": "ns",
            "range": "± 118848.08634294741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3751939.8,
            "unit": "ns",
            "range": "± 180805.78412870038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17218.18888888889,
            "unit": "ns",
            "range": "± 1828.188891013035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84595.89361702128,
            "unit": "ns",
            "range": "± 9616.378311643475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79242.30898876404,
            "unit": "ns",
            "range": "± 7343.287639799176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101623.05263157895,
            "unit": "ns",
            "range": "± 15483.889034246531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4984.813186813187,
            "unit": "ns",
            "range": "± 641.9585987358083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16891.682352941178,
            "unit": "ns",
            "range": "± 1790.2036078119631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1508656.1505376345,
            "unit": "ns",
            "range": "± 167012.11031330389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3072501.9891304346,
            "unit": "ns",
            "range": "± 336391.04205257853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2488002.0368421054,
            "unit": "ns",
            "range": "± 240155.11957065578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6726864.032608695,
            "unit": "ns",
            "range": "± 491009.9746447594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3064392.1395348837,
            "unit": "ns",
            "range": "± 112832.36580992964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3260998.3095238097,
            "unit": "ns",
            "range": "± 107976.89228685111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4374298.919354838,
            "unit": "ns",
            "range": "± 310586.5249260111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4201319.5869565215,
            "unit": "ns",
            "range": "± 314536.6925318959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7579095.72881356,
            "unit": "ns",
            "range": "± 324613.28814127547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6028886.494591346,
            "unit": "ns",
            "range": "± 69367.02844561404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1991904.2039620536,
            "unit": "ns",
            "range": "± 24135.109771703283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1270682.349330357,
            "unit": "ns",
            "range": "± 14420.693572732307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2437023.725167411,
            "unit": "ns",
            "range": "± 26221.433507199945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847278.9426432292,
            "unit": "ns",
            "range": "± 11416.43381843553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731296.2856770833,
            "unit": "ns",
            "range": "± 9178.06637562613"
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
          "id": "cea4a5752a563ddb2b7e85eaac110aff3047349e",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:23:52+09:00",
          "tree_id": "d379f6d07130960ff174b24bd1135526adb623d0",
          "url": "https://github.com/greymistcube/libplanet/commit/cea4a5752a563ddb2b7e85eaac110aff3047349e"
        },
        "date": 1684212080314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8897860.294117646,
            "unit": "ns",
            "range": "± 280476.41046657367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23638598.581967212,
            "unit": "ns",
            "range": "± 1051178.8347699342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58329224.166666664,
            "unit": "ns",
            "range": "± 827800.5020511594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118690868.375,
            "unit": "ns",
            "range": "± 2220760.233950523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237651224.08333334,
            "unit": "ns",
            "range": "± 11678891.792462854"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72745.40217391304,
            "unit": "ns",
            "range": "± 9708.806288096155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367705.0967741936,
            "unit": "ns",
            "range": "± 15941.274236571026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350130.5684931507,
            "unit": "ns",
            "range": "± 16410.84652611122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334599.4285714286,
            "unit": "ns",
            "range": "± 14251.070372377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4807793.066666666,
            "unit": "ns",
            "range": "± 68324.15846480518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4447946.77027027,
            "unit": "ns",
            "range": "± 221447.87392908882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19618.09574468085,
            "unit": "ns",
            "range": "± 1433.8906173632433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96301.0947368421,
            "unit": "ns",
            "range": "± 7441.231359829093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96101.43157894736,
            "unit": "ns",
            "range": "± 11581.534015959283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113322.91666666667,
            "unit": "ns",
            "range": "± 16984.57928993652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6190.021052631579,
            "unit": "ns",
            "range": "± 879.4527914095385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17965.84946236559,
            "unit": "ns",
            "range": "± 1648.2452325601664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1791203.8421052631,
            "unit": "ns",
            "range": "± 173902.0811299447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3596829.915730337,
            "unit": "ns",
            "range": "± 458049.27827194554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3073798.282051282,
            "unit": "ns",
            "range": "± 324187.46460437705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8703842.691011235,
            "unit": "ns",
            "range": "± 1418514.1315758163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3860172.795698925,
            "unit": "ns",
            "range": "± 253608.59684713575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4150324.1666666665,
            "unit": "ns",
            "range": "± 42820.24057261904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5189557.6875,
            "unit": "ns",
            "range": "± 137967.7557445562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4882349.675,
            "unit": "ns",
            "range": "± 171126.48911511633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8811295.291666666,
            "unit": "ns",
            "range": "± 221598.2487629906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7135248.75,
            "unit": "ns",
            "range": "± 27513.15714695561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2277022.468191964,
            "unit": "ns",
            "range": "± 18557.1810462211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1469354.2756835937,
            "unit": "ns",
            "range": "± 33357.82190941065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3201128.476302083,
            "unit": "ns",
            "range": "± 30151.941476844968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937029.0672363281,
            "unit": "ns",
            "range": "± 20886.20107398201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 856349.8265904018,
            "unit": "ns",
            "range": "± 11261.299725635794"
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
          "id": "a2160f7a74419656fd340bd3a78c6be676ba4dd1",
          "message": "Release 1.2.0",
          "timestamp": "2023-05-16T13:27:21+09:00",
          "tree_id": "2085a9782b57ad4f6a8e3a8d2d33efcec83c8ad6",
          "url": "https://github.com/greymistcube/libplanet/commit/a2160f7a74419656fd340bd3a78c6be676ba4dd1"
        },
        "date": 1684212211603,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8226137.5,
            "unit": "ns",
            "range": "± 430644.8973743941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19787559,
            "unit": "ns",
            "range": "± 833000.7945147404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49517255.875,
            "unit": "ns",
            "range": "± 904149.8201731743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100453581,
            "unit": "ns",
            "range": "± 2114285.083598604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212126769.3888889,
            "unit": "ns",
            "range": "± 4365751.0068641715"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62817.742268041235,
            "unit": "ns",
            "range": "± 8097.366826730299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321082.04210526316,
            "unit": "ns",
            "range": "± 27122.644129055705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307258.05494505493,
            "unit": "ns",
            "range": "± 25878.667506638933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289104.6,
            "unit": "ns",
            "range": "± 21889.72470802816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3945951.523809524,
            "unit": "ns",
            "range": "± 93930.3266584435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3506092.153846154,
            "unit": "ns",
            "range": "± 43190.42339038858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16199.851063829787,
            "unit": "ns",
            "range": "± 1410.169104154067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83247.75789473685,
            "unit": "ns",
            "range": "± 8215.376875513317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81975.9,
            "unit": "ns",
            "range": "± 15447.58698622441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96989.10752688172,
            "unit": "ns",
            "range": "± 15481.046338965009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6336.36170212766,
            "unit": "ns",
            "range": "± 1467.1553750869518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17420.309278350516,
            "unit": "ns",
            "range": "± 3347.3549954927876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1494755.244680851,
            "unit": "ns",
            "range": "± 204754.05386477156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2859183.139784946,
            "unit": "ns",
            "range": "± 182469.26164399352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350692.147368421,
            "unit": "ns",
            "range": "± 151067.43763757398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6063403.615384615,
            "unit": "ns",
            "range": "± 249245.96389377976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3348654.723404255,
            "unit": "ns",
            "range": "± 250211.93797358658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3461755.5211267606,
            "unit": "ns",
            "range": "± 168553.30245439184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4492912,
            "unit": "ns",
            "range": "± 245101.15891847966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4460445.258064516,
            "unit": "ns",
            "range": "± 187938.08006088948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7840335.819444444,
            "unit": "ns",
            "range": "± 367569.0842126863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6452349.3742897725,
            "unit": "ns",
            "range": "± 151258.02933590856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1964397.7495349701,
            "unit": "ns",
            "range": "± 44461.46440139358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1278847.6953125,
            "unit": "ns",
            "range": "± 18166.46186499242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2749305.443684896,
            "unit": "ns",
            "range": "± 22697.993615874704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857408.8028094952,
            "unit": "ns",
            "range": "± 5135.807286953093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755697.2492947049,
            "unit": "ns",
            "range": "± 15521.71396182827"
          }
        ]
      }
    ]
  }
}