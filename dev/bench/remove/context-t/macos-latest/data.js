window.BENCHMARK_DATA = {
  "lastUpdate": 1684414102668,
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
          "id": "6a67d492bb5dfbf0b451a006e4c72ae2cb1c2c6c",
          "message": "Removed t from Context and ConsensusContext",
          "timestamp": "2023-05-18T19:53:46+09:00",
          "tree_id": "66139e90fd004f391d5a5c9cff75f998c5569cf7",
          "url": "https://github.com/greymistcube/libplanet/commit/6a67d492bb5dfbf0b451a006e4c72ae2cb1c2c6c"
        },
        "date": 1684408091870,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7610128.914285715,
            "unit": "ns",
            "range": "± 247687.75589918604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18923072.633333333,
            "unit": "ns",
            "range": "± 558603.3904160529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46432802.705882356,
            "unit": "ns",
            "range": "± 772804.7031610545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91326029.73076923,
            "unit": "ns",
            "range": "± 820220.5877495349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188415467.5,
            "unit": "ns",
            "range": "± 1271461.357667625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56156.57894736842,
            "unit": "ns",
            "range": "± 6217.140191539371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328362.89285714284,
            "unit": "ns",
            "range": "± 16524.460391472574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311278.4696969697,
            "unit": "ns",
            "range": "± 31077.550837382485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302006.9693877551,
            "unit": "ns",
            "range": "± 21734.15665476576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4138725.5555555555,
            "unit": "ns",
            "range": "± 87921.74787256746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3700984.6470588236,
            "unit": "ns",
            "range": "± 72216.41456928368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19996.15306122449,
            "unit": "ns",
            "range": "± 3362.5868519869464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116410.30927835051,
            "unit": "ns",
            "range": "± 10100.604449075503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106208.21,
            "unit": "ns",
            "range": "± 20792.286278151965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119618.02380952382,
            "unit": "ns",
            "range": "± 7424.94016117414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7622.711340206186,
            "unit": "ns",
            "range": "± 1354.051997391863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19756.76530612245,
            "unit": "ns",
            "range": "± 3052.799822914029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1507401.5416666667,
            "unit": "ns",
            "range": "± 150822.34878453013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2786371.252873563,
            "unit": "ns",
            "range": "± 150947.26415595572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2425140.432989691,
            "unit": "ns",
            "range": "± 254517.19964232066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6093751.978723404,
            "unit": "ns",
            "range": "± 234690.83406412983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3086175.8775510206,
            "unit": "ns",
            "range": "± 121256.7609545671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3290494.5217391304,
            "unit": "ns",
            "range": "± 126022.31288567543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4383847.7,
            "unit": "ns",
            "range": "± 174458.55298424652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4159756.880952381,
            "unit": "ns",
            "range": "± 221892.1968109199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7443974.580645162,
            "unit": "ns",
            "range": "± 325573.03637808247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6926954.341517857,
            "unit": "ns",
            "range": "± 63547.187046441126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893381.383984375,
            "unit": "ns",
            "range": "± 8226.721204739755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296718.5482421876,
            "unit": "ns",
            "range": "± 15425.394170325964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612985.4070870536,
            "unit": "ns",
            "range": "± 29343.0243272185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 786357.7482421875,
            "unit": "ns",
            "range": "± 11876.28869676122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741125.2205078125,
            "unit": "ns",
            "range": "± 10347.396309163449"
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
          "id": "b364cee575a42e9570a772c7a47d06f8d0e06b4b",
          "message": "Changelog",
          "timestamp": "2023-05-18T21:27:43+09:00",
          "tree_id": "ed442d539f1e3b005b59cad237d72f0fae161aaa",
          "url": "https://github.com/greymistcube/libplanet/commit/b364cee575a42e9570a772c7a47d06f8d0e06b4b"
        },
        "date": 1684413916920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7861945.555555556,
            "unit": "ns",
            "range": "± 151882.2570066626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20759130.48275862,
            "unit": "ns",
            "range": "± 597906.3213699845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59725651.15384615,
            "unit": "ns",
            "range": "± 1580961.107511401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96567954.83333333,
            "unit": "ns",
            "range": "± 485700.4421450311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207007137.9090909,
            "unit": "ns",
            "range": "± 7678963.344633536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72115.95833333333,
            "unit": "ns",
            "range": "± 8636.682613519304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343181.06842105265,
            "unit": "ns",
            "range": "± 28751.097491227287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330177.811827957,
            "unit": "ns",
            "range": "± 36752.62111385613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324314.46153846156,
            "unit": "ns",
            "range": "± 28258.19861535083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4370908.382022472,
            "unit": "ns",
            "range": "± 242163.9017936887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3916167.653846154,
            "unit": "ns",
            "range": "± 161514.8661650958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21185.48947368421,
            "unit": "ns",
            "range": "± 4461.564448674394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106538.53608247422,
            "unit": "ns",
            "range": "± 17619.822508483318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115403.55555555556,
            "unit": "ns",
            "range": "± 10776.18508419325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123730.32291666667,
            "unit": "ns",
            "range": "± 20595.445956503558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7861.634408602151,
            "unit": "ns",
            "range": "± 1088.0799181900181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22953.684210526317,
            "unit": "ns",
            "range": "± 5307.3650497734325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608913.1063829786,
            "unit": "ns",
            "range": "± 177522.4438711432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2994033.7974683545,
            "unit": "ns",
            "range": "± 154368.34940279395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2621746.8673469387,
            "unit": "ns",
            "range": "± 320972.7956052864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7037174.917525773,
            "unit": "ns",
            "range": "± 587732.3396689367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3432841.6966292136,
            "unit": "ns",
            "range": "± 203144.07595301577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3597285.746987952,
            "unit": "ns",
            "range": "± 302733.5113183985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4522303.745762712,
            "unit": "ns",
            "range": "± 199836.09952620685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4450379.358024691,
            "unit": "ns",
            "range": "± 375519.09634382476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7985237.4125,
            "unit": "ns",
            "range": "± 406291.1828796114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6942135.1552734375,
            "unit": "ns",
            "range": "± 226975.774745199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998287.9478236607,
            "unit": "ns",
            "range": "± 23168.62360286772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1329168.6814903845,
            "unit": "ns",
            "range": "± 13902.775187324949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2761492.6021634615,
            "unit": "ns",
            "range": "± 26914.971324086022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878199.7408447266,
            "unit": "ns",
            "range": "± 17028.37707963005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771038.1813964844,
            "unit": "ns",
            "range": "± 6876.594287805606"
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
          "id": "57ed69e090b34c337fbe618dba28de15be6c5670",
          "message": "Removed t from ConsensusReactor",
          "timestamp": "2023-05-18T21:26:02+09:00",
          "tree_id": "85b2f7e03ef57b4101738071436d98028ef8c60c",
          "url": "https://github.com/greymistcube/libplanet/commit/57ed69e090b34c337fbe618dba28de15be6c5670"
        },
        "date": 1684414085470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9046989.532258065,
            "unit": "ns",
            "range": "± 945677.5184824698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20019002.875,
            "unit": "ns",
            "range": "± 504310.2160246308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50275246.54347826,
            "unit": "ns",
            "range": "± 1217579.9397971774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130989277.69,
            "unit": "ns",
            "range": "± 12378538.377373818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228548850.12626263,
            "unit": "ns",
            "range": "± 18064908.6547284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81830.3947368421,
            "unit": "ns",
            "range": "± 17733.897807782894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307876.75789473683,
            "unit": "ns",
            "range": "± 19813.4094130319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289446.0430107527,
            "unit": "ns",
            "range": "± 16418.914631364732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318332.72857142857,
            "unit": "ns",
            "range": "± 15470.52692573984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4342565.877777778,
            "unit": "ns",
            "range": "± 335868.17426353414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3617705.65,
            "unit": "ns",
            "range": "± 78569.10147076703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16827.291666666668,
            "unit": "ns",
            "range": "± 1843.8622332180137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98029.71134020618,
            "unit": "ns",
            "range": "± 13283.979559478437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98945.84020618557,
            "unit": "ns",
            "range": "± 15000.5791547128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126653.9574468085,
            "unit": "ns",
            "range": "± 23438.26686449049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7333.031914893617,
            "unit": "ns",
            "range": "± 1108.3196857640885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18024.602272727272,
            "unit": "ns",
            "range": "± 2711.3575004353797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1623672.3033707866,
            "unit": "ns",
            "range": "± 219014.9346965763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3140327.584269663,
            "unit": "ns",
            "range": "± 218908.5957049617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2759809.6739130435,
            "unit": "ns",
            "range": "± 471566.2637746312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7032666.351648352,
            "unit": "ns",
            "range": "± 603422.9176617042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3435574.6304347827,
            "unit": "ns",
            "range": "± 296995.9156486547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3552504.244680851,
            "unit": "ns",
            "range": "± 397025.15612610866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4447899.395604395,
            "unit": "ns",
            "range": "± 282807.15336280846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4432272.905263158,
            "unit": "ns",
            "range": "± 488442.8014125131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7807502.554347826,
            "unit": "ns",
            "range": "± 512676.67973634275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6948340.022712629,
            "unit": "ns",
            "range": "± 423658.6406727204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2063363.6643708881,
            "unit": "ns",
            "range": "± 44169.97829066306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412630.4826822917,
            "unit": "ns",
            "range": "± 78207.77573575612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2842464.759893003,
            "unit": "ns",
            "range": "± 201123.24015573208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831722.1815655048,
            "unit": "ns",
            "range": "± 9040.63033470163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795834.2726768092,
            "unit": "ns",
            "range": "± 53852.050888008394"
          }
        ]
      }
    ]
  }
}