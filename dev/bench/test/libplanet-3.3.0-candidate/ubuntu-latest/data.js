window.BENCHMARK_DATA = {
  "lastUpdate": 1694494958548,
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
          "id": "4c727b97eb46a893a810b8db3570fa3ca521d994",
          "message": "Logging for trie set count",
          "timestamp": "2023-09-12T09:05:30+09:00",
          "tree_id": "c99165fc6bcea0ce8fc7832bb6306319b8b19f85",
          "url": "https://github.com/greymistcube/libplanet/commit/4c727b97eb46a893a810b8db3570fa3ca521d994"
        },
        "date": 1694478269572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1712509.4545454546,
            "unit": "ns",
            "range": "± 182166.87211171177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3275233.758241758,
            "unit": "ns",
            "range": "± 216661.11716479363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141092.2421052633,
            "unit": "ns",
            "range": "± 172772.98662226374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5885247.084210526,
            "unit": "ns",
            "range": "± 373546.06622125715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368331.53,
            "unit": "ns",
            "range": "± 46328.950872195295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360722.8958333333,
            "unit": "ns",
            "range": "± 42552.91086894777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296156.6666666667,
            "unit": "ns",
            "range": "± 31245.426606875033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5042572.176470588,
            "unit": "ns",
            "range": "± 238393.36382097309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4729555.486111111,
            "unit": "ns",
            "range": "± 232228.02831329705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35731.26,
            "unit": "ns",
            "range": "± 10493.646999297176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126889.84848484848,
            "unit": "ns",
            "range": "± 17589.887023435283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129817.9574468085,
            "unit": "ns",
            "range": "± 19796.381331056982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130959.36458333333,
            "unit": "ns",
            "range": "± 24500.880499374445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6737.023809523809,
            "unit": "ns",
            "range": "± 876.7221672014578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30173.939393939392,
            "unit": "ns",
            "range": "± 10445.123451384228"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75129.15789473684,
            "unit": "ns",
            "range": "± 13424.458351382209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9671514.51764706,
            "unit": "ns",
            "range": "± 520963.3308454273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26766962.10769231,
            "unit": "ns",
            "range": "± 1241767.8141161557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69024218.03125,
            "unit": "ns",
            "range": "± 2114324.3611006127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138258544.07142857,
            "unit": "ns",
            "range": "± 2438982.7995112874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277439936.04761904,
            "unit": "ns",
            "range": "± 6143710.295995584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3959267.494845361,
            "unit": "ns",
            "range": "± 241341.66510870037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4205263.93814433,
            "unit": "ns",
            "range": "± 294355.3057434308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5488052.9387755105,
            "unit": "ns",
            "range": "± 359253.510883441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4603042.79787234,
            "unit": "ns",
            "range": "± 320195.55743654293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8049309.5051546395,
            "unit": "ns",
            "range": "± 473644.83707734366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5998193.9125,
            "unit": "ns",
            "range": "± 80588.38484141922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902668.8033854167,
            "unit": "ns",
            "range": "± 26134.87401661164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294669.8307291667,
            "unit": "ns",
            "range": "± 5896.015692004137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3116864.3406808036,
            "unit": "ns",
            "range": "± 27550.669251537372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1020077.6334635416,
            "unit": "ns",
            "range": "± 13906.969535137625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955796.6221354167,
            "unit": "ns",
            "range": "± 10336.910256188834"
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
          "id": "20b51fbe6b5f0901c4560954b6cbca632d14f0c9",
          "message": "Added ITrie cache",
          "timestamp": "2023-09-12T11:11:33+09:00",
          "tree_id": "845985624c70aabe29a5e774c37bc74bd9e76331",
          "url": "https://github.com/greymistcube/libplanet/commit/20b51fbe6b5f0901c4560954b6cbca632d14f0c9"
        },
        "date": 1694485500067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442671.6907216494,
            "unit": "ns",
            "range": "± 88900.95871440787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2746592.419354839,
            "unit": "ns",
            "range": "± 83323.86155548888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1792696.2688172043,
            "unit": "ns",
            "range": "± 101330.52071725046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4570047.05882353,
            "unit": "ns",
            "range": "± 90350.01958457909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288559.5263157895,
            "unit": "ns",
            "range": "± 6177.354615119296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267794.32352941175,
            "unit": "ns",
            "range": "± 7751.187137701684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228689.61538461538,
            "unit": "ns",
            "range": "± 3687.557039976049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4378917.466666667,
            "unit": "ns",
            "range": "± 45922.6958670246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4025576.933333333,
            "unit": "ns",
            "range": "± 50826.47823648427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20336.2,
            "unit": "ns",
            "range": "± 1423.8453597601947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88155.28888888888,
            "unit": "ns",
            "range": "± 4903.594002395039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71984.91666666667,
            "unit": "ns",
            "range": "± 1045.2099796285681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75597.8375,
            "unit": "ns",
            "range": "± 4870.295973757003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5262.4946236559135,
            "unit": "ns",
            "range": "± 568.1376253900321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20234.478723404256,
            "unit": "ns",
            "range": "± 1546.9786559316296"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49928.78313253012,
            "unit": "ns",
            "range": "± 2683.5741094993878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8226656.466666667,
            "unit": "ns",
            "range": "± 125038.8063162031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22260815.923076924,
            "unit": "ns",
            "range": "± 125542.65603136751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55490596.86666667,
            "unit": "ns",
            "range": "± 499981.9886555724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109896203,
            "unit": "ns",
            "range": "± 1127217.3703672115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221497473.4,
            "unit": "ns",
            "range": "± 1936461.4012953702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3483617,
            "unit": "ns",
            "range": "± 70719.23804117943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3635679.212121212,
            "unit": "ns",
            "range": "± 112488.1280135146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4412460.636363637,
            "unit": "ns",
            "range": "± 138280.54914869132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4030548.0555555555,
            "unit": "ns",
            "range": "± 118937.46019242801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6299504.478260869,
            "unit": "ns",
            "range": "± 133057.78675477454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5060400.761160715,
            "unit": "ns",
            "range": "± 14013.59565443816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1600449.9850725445,
            "unit": "ns",
            "range": "± 3928.5641246403598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062991.9225260417,
            "unit": "ns",
            "range": "± 2064.0403518428275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2677453.90625,
            "unit": "ns",
            "range": "± 5937.777516098803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821918.2638671875,
            "unit": "ns",
            "range": "± 941.3781059449653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755460.4049479166,
            "unit": "ns",
            "range": "± 878.21486722842"
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
          "id": "504b445d22fbd2db3a1fe516d0389a994d698f35",
          "message": "Cache logging",
          "timestamp": "2023-09-12T13:49:30+09:00",
          "tree_id": "c658c5d4c27b8b7df04d8333f3413e60b811422f",
          "url": "https://github.com/greymistcube/libplanet/commit/504b445d22fbd2db3a1fe516d0389a994d698f35"
        },
        "date": 1694494950065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332215.119047619,
            "unit": "ns",
            "range": "± 62652.75021038914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2547371.846153846,
            "unit": "ns",
            "range": "± 40003.394399405144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1701019.1927710844,
            "unit": "ns",
            "range": "± 86620.2559204167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4880828.6,
            "unit": "ns",
            "range": "± 308073.6181730634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267391.05263157893,
            "unit": "ns",
            "range": "± 9109.940905102092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255398.74285714285,
            "unit": "ns",
            "range": "± 7655.09296575069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220178.23076923078,
            "unit": "ns",
            "range": "± 2043.1647083974963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4224332.2,
            "unit": "ns",
            "range": "± 64688.95877880332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3937805.3333333335,
            "unit": "ns",
            "range": "± 67788.59301604687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19334.14893617021,
            "unit": "ns",
            "range": "± 1202.9846034235536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83165.69135802469,
            "unit": "ns",
            "range": "± 4183.628624298454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71212.29411764706,
            "unit": "ns",
            "range": "± 1432.686277797144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76252.42857142857,
            "unit": "ns",
            "range": "± 13656.568549093234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4787.4,
            "unit": "ns",
            "range": "± 507.0494625249182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16968.526315789473,
            "unit": "ns",
            "range": "± 1159.0325371500371"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50869.86111111111,
            "unit": "ns",
            "range": "± 2517.4680735939723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7956863.692307692,
            "unit": "ns",
            "range": "± 20670.844670632978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21623068.444444444,
            "unit": "ns",
            "range": "± 446491.4992605218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52613355.14285714,
            "unit": "ns",
            "range": "± 554092.8348977768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103308582.23076923,
            "unit": "ns",
            "range": "± 520423.9791013595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208114739.33333334,
            "unit": "ns",
            "range": "± 2729507.999675993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3283860.5714285714,
            "unit": "ns",
            "range": "± 42695.26890690545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3417025.2,
            "unit": "ns",
            "range": "± 52522.277199026976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4089868.153846154,
            "unit": "ns",
            "range": "± 57818.02408540979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3701629.3255813955,
            "unit": "ns",
            "range": "± 124216.3129275702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5953349.055555556,
            "unit": "ns",
            "range": "± 108223.40764932524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4896637.075892857,
            "unit": "ns",
            "range": "± 17392.59655878807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1553411.680889423,
            "unit": "ns",
            "range": "± 3607.984329096342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1065481.1111886161,
            "unit": "ns",
            "range": "± 3516.120806416608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572767.576041667,
            "unit": "ns",
            "range": "± 5307.955989960091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808524.6007161458,
            "unit": "ns",
            "range": "± 1833.1150159019753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731867.1448800223,
            "unit": "ns",
            "range": "± 1281.705866100562"
          }
        ]
      }
    ]
  }
}