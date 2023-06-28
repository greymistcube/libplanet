window.BENCHMARK_DATA = {
  "lastUpdate": 1687934356940,
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
          "id": "c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca",
          "message": "Use mocked state for testing; make AccountStateDelta creator private",
          "timestamp": "2023-06-27T19:17:10+09:00",
          "tree_id": "cfb95f884f28b3ef3c68c89991ef131469521fa8",
          "url": "https://github.com/greymistcube/libplanet/commit/c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca"
        },
        "date": 1687930676490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12688002.709677419,
            "unit": "ns",
            "range": "± 3737392.9754902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32731944.577777777,
            "unit": "ns",
            "range": "± 7930561.4015140245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61719641.344444446,
            "unit": "ns",
            "range": "± 8584557.107408501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117177123.79310344,
            "unit": "ns",
            "range": "± 9040963.06723475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232052814.1451613,
            "unit": "ns",
            "range": "± 7014393.908233824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82065.81609195402,
            "unit": "ns",
            "range": "± 6889.346618239619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 397965.9375,
            "unit": "ns",
            "range": "± 48430.45652040666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389301.33684210526,
            "unit": "ns",
            "range": "± 55545.6113526974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340248.26086956525,
            "unit": "ns",
            "range": "± 33920.90742905207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4645586.331578948,
            "unit": "ns",
            "range": "± 400160.7596766487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4078407.787878788,
            "unit": "ns",
            "range": "± 355314.5418708662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25861.298850574713,
            "unit": "ns",
            "range": "± 3149.9116566236503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125803.64210526316,
            "unit": "ns",
            "range": "± 14047.658071581918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129331.85164835164,
            "unit": "ns",
            "range": "± 14786.648256205572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140746.30208333334,
            "unit": "ns",
            "range": "± 24322.389290363633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8597.39247311828,
            "unit": "ns",
            "range": "± 881.3423983304696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25478.03846153846,
            "unit": "ns",
            "range": "± 2865.8497491346934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1915684.8406593406,
            "unit": "ns",
            "range": "± 294672.9253528853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3440457.9269662923,
            "unit": "ns",
            "range": "± 472582.8435380617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3142211.2608695654,
            "unit": "ns",
            "range": "± 646761.1604301832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7111146.659090909,
            "unit": "ns",
            "range": "± 951949.283757545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3604388.9615384615,
            "unit": "ns",
            "range": "± 320391.5468130382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4065642.0459770113,
            "unit": "ns",
            "range": "± 555768.127628297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5088537.882022472,
            "unit": "ns",
            "range": "± 467507.5648801287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4927709.392473118,
            "unit": "ns",
            "range": "± 594492.1356661695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8771324.640449438,
            "unit": "ns",
            "range": "± 833490.8770062057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7371332.8984375,
            "unit": "ns",
            "range": "± 253717.37718380007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2194298.859675481,
            "unit": "ns",
            "range": "± 28522.92201274998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1442655.4741586538,
            "unit": "ns",
            "range": "± 21979.412773103915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3252116.04200932,
            "unit": "ns",
            "range": "± 139760.7613376179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999544.1279523983,
            "unit": "ns",
            "range": "± 36740.32096838309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 835676.184765625,
            "unit": "ns",
            "range": "± 14304.403467712349"
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
          "id": "6eead33b3a627df8dc35d59e9d1ffa8a8e26b16e",
          "message": "Changelog",
          "timestamp": "2023-06-28T14:35:28+09:00",
          "tree_id": "faf64967d947084048a5886ac079ae8cbbd6c6da",
          "url": "https://github.com/greymistcube/libplanet/commit/6eead33b3a627df8dc35d59e9d1ffa8a8e26b16e"
        },
        "date": 1687932179206,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10467303.56043956,
            "unit": "ns",
            "range": "± 2202069.9524116255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25031865.422222223,
            "unit": "ns",
            "range": "± 3884131.626635087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66565178.44444445,
            "unit": "ns",
            "range": "± 13926623.03232013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147593285.42708334,
            "unit": "ns",
            "range": "± 34835323.23556674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269657582.89361703,
            "unit": "ns",
            "range": "± 44839103.21005274"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83637.58064516129,
            "unit": "ns",
            "range": "± 12765.393913541493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383091.7988505747,
            "unit": "ns",
            "range": "± 34408.48107902271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 390582.2978723404,
            "unit": "ns",
            "range": "± 44825.24113952729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 360099.7252747253,
            "unit": "ns",
            "range": "± 33387.379717846794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4676858.505494505,
            "unit": "ns",
            "range": "± 337320.7999274207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4030670.273809524,
            "unit": "ns",
            "range": "± 226099.6182930202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27308.375,
            "unit": "ns",
            "range": "± 5065.344885125114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131293.64285714287,
            "unit": "ns",
            "range": "± 24569.414330867872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127092.34831460674,
            "unit": "ns",
            "range": "± 10286.966176474705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142657.12371134022,
            "unit": "ns",
            "range": "± 24822.864267502846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9584.479591836734,
            "unit": "ns",
            "range": "± 2038.192012542387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23919.644329896906,
            "unit": "ns",
            "range": "± 5633.704391113532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2151195.139784946,
            "unit": "ns",
            "range": "± 429423.82843677344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3533149.9285714286,
            "unit": "ns",
            "range": "± 386245.62951440754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3084146.139784946,
            "unit": "ns",
            "range": "± 473523.688393351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8561885.29787234,
            "unit": "ns",
            "range": "± 1908416.4838238868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3680718.8913043477,
            "unit": "ns",
            "range": "± 273565.9622976408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3944606.5967741935,
            "unit": "ns",
            "range": "± 371217.6773453486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5723117.220430108,
            "unit": "ns",
            "range": "± 1438089.5588616666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4823347.380434782,
            "unit": "ns",
            "range": "± 402406.9330541963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8445403.86904762,
            "unit": "ns",
            "range": "± 730673.6479609408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7369801.629472373,
            "unit": "ns",
            "range": "± 353683.6784240389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2167433.9448553855,
            "unit": "ns",
            "range": "± 127341.14895543043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422334.4151204426,
            "unit": "ns",
            "range": "± 69936.69986622568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3137303.16136137,
            "unit": "ns",
            "range": "± 273871.28641817736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863884.3608758224,
            "unit": "ns",
            "range": "± 52301.441505769944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806861.0361328125,
            "unit": "ns",
            "range": "± 10020.833164294558"
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
          "id": "0ae8443088a45cb0f15b0d2c4f1065272f36c824",
          "message": "Changelog",
          "timestamp": "2023-06-28T15:16:48+09:00",
          "tree_id": "faf64967d947084048a5886ac079ae8cbbd6c6da",
          "url": "https://github.com/greymistcube/libplanet/commit/0ae8443088a45cb0f15b0d2c4f1065272f36c824"
        },
        "date": 1687934328460,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8520377.142857144,
            "unit": "ns",
            "range": "± 90162.12750937327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21582583.7,
            "unit": "ns",
            "range": "± 286784.77233264275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51867621.733333334,
            "unit": "ns",
            "range": "± 704835.1967399863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103404799.92857143,
            "unit": "ns",
            "range": "± 3736290.9735839237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215289589,
            "unit": "ns",
            "range": "± 2584440.3455805797"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77822.05056179775,
            "unit": "ns",
            "range": "± 9126.839996320587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346067.05263157893,
            "unit": "ns",
            "range": "± 11742.692379581413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332502.0535714286,
            "unit": "ns",
            "range": "± 13714.688526499465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321341.2727272727,
            "unit": "ns",
            "range": "± 10140.447852143683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4291313.5,
            "unit": "ns",
            "range": "± 63816.30075067028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871325.423076923,
            "unit": "ns",
            "range": "± 62347.329509051604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24892.135416666668,
            "unit": "ns",
            "range": "± 3200.0305314984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113655.35416666667,
            "unit": "ns",
            "range": "± 12408.270525385089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105065,
            "unit": "ns",
            "range": "± 15613.768562579837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123692.35789473684,
            "unit": "ns",
            "range": "± 14378.432336142103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8322.952631578948,
            "unit": "ns",
            "range": "± 1161.9995218113515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21790.744680851065,
            "unit": "ns",
            "range": "± 3636.729583450417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1757663.6136363635,
            "unit": "ns",
            "range": "± 256572.67346378637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3040837.4683544305,
            "unit": "ns",
            "range": "± 155594.92314148956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2814819.902173913,
            "unit": "ns",
            "range": "± 365946.23516345816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7337193.388888889,
            "unit": "ns",
            "range": "± 1117932.1249691069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3355116.717391304,
            "unit": "ns",
            "range": "± 143503.49139223364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3506455.294871795,
            "unit": "ns",
            "range": "± 105204.79285764492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4558966.484375,
            "unit": "ns",
            "range": "± 210887.68834814694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4746205,
            "unit": "ns",
            "range": "± 75216.97899410744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7610065.635135135,
            "unit": "ns",
            "range": "± 257383.3013679492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6754448.390625,
            "unit": "ns",
            "range": "± 90922.49928126928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016927.558314732,
            "unit": "ns",
            "range": "± 24071.76567018241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1322251.244954427,
            "unit": "ns",
            "range": "± 5302.408254113361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2729034.265527344,
            "unit": "ns",
            "range": "± 96072.37862740204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804836.4753255208,
            "unit": "ns",
            "range": "± 8370.510339172986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 813193.9056222098,
            "unit": "ns",
            "range": "± 6556.663614156114"
          }
        ]
      }
    ]
  }
}