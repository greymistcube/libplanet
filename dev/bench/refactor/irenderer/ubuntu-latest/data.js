window.BENCHMARK_DATA = {
  "lastUpdate": 1681808001530,
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
          "id": "c67a48c84c061de44a996edbe4e01e05f584712d",
          "message": "Cleanup",
          "timestamp": "2023-04-16T17:21:08+09:00",
          "tree_id": "c8773927198ad9950c59c78a0373b3715524733f",
          "url": "https://github.com/greymistcube/libplanet/commit/c67a48c84c061de44a996edbe4e01e05f584712d"
        },
        "date": 1681634031269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7443677.928571428,
            "unit": "ns",
            "range": "± 10127.906629052875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18846922.4,
            "unit": "ns",
            "range": "± 49054.76856214607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48378892.6,
            "unit": "ns",
            "range": "± 242981.54311822593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96166003.28571428,
            "unit": "ns",
            "range": "± 551437.1594313881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192225720.86666667,
            "unit": "ns",
            "range": "± 921131.2814761195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44157.555555555555,
            "unit": "ns",
            "range": "± 1803.5243413938165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322577.2631578948,
            "unit": "ns",
            "range": "± 83756.77397161462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2499183,
            "unit": "ns",
            "range": "± 63331.804711377044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2109616.634920635,
            "unit": "ns",
            "range": "± 94109.02912927585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5333522.466666667,
            "unit": "ns",
            "range": "± 99446.92086870597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5876579.341145833,
            "unit": "ns",
            "range": "± 18808.385751905524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1817624.8231026786,
            "unit": "ns",
            "range": "± 2222.2606999060336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368882.3595052084,
            "unit": "ns",
            "range": "± 2520.6956929332714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550653.70703125,
            "unit": "ns",
            "range": "± 4776.885985858707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798034.9350260417,
            "unit": "ns",
            "range": "± 1275.8411837553144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728334.4159505208,
            "unit": "ns",
            "range": "± 762.2928406286089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314203.22222222225,
            "unit": "ns",
            "range": "± 4976.217055455532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260230.5,
            "unit": "ns",
            "range": "± 10190.181749365729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231170.53333333333,
            "unit": "ns",
            "range": "± 4069.0086870438226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5519777.466666667,
            "unit": "ns",
            "range": "± 37166.15043647467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3937192.1428571427,
            "unit": "ns",
            "range": "± 32572.11103632427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16157.547368421052,
            "unit": "ns",
            "range": "± 952.7466204255793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84251.10989010989,
            "unit": "ns",
            "range": "± 4895.861813705641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73226.46153846153,
            "unit": "ns",
            "range": "± 930.7635409870594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 171143.4387755102,
            "unit": "ns",
            "range": "± 15083.94602728162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4433.19587628866,
            "unit": "ns",
            "range": "± 468.13603434203236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15032.119565217392,
            "unit": "ns",
            "range": "± 1020.7831602609521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3226605.2,
            "unit": "ns",
            "range": "± 59898.22615570514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3300884.1470588236,
            "unit": "ns",
            "range": "± 101400.33983181723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4107625.8666666667,
            "unit": "ns",
            "range": "± 43910.18432285005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4126799.586956522,
            "unit": "ns",
            "range": "± 158916.31941868388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6898604.666666667,
            "unit": "ns",
            "range": "± 112979.76506036485"
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
          "id": "0a875192c32040aad6e1b540b2ab4ff0d43bf7f3",
          "message": "Changelog",
          "timestamp": "2023-04-17T15:30:59+09:00",
          "tree_id": "2d9d98eefac76fb1bcdfc5574207642e6480c441",
          "url": "https://github.com/greymistcube/libplanet/commit/0a875192c32040aad6e1b540b2ab4ff0d43bf7f3"
        },
        "date": 1681713917865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8916052.733333332,
            "unit": "ns",
            "range": "± 38308.320139674746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22996943.333333332,
            "unit": "ns",
            "range": "± 143244.78237152888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61351540.21428572,
            "unit": "ns",
            "range": "± 281363.1715376406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114373232.8,
            "unit": "ns",
            "range": "± 262940.0800427461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229386180.92857143,
            "unit": "ns",
            "range": "± 478155.0268664023"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75840.80208333333,
            "unit": "ns",
            "range": "± 6147.631241928264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588526.3617021276,
            "unit": "ns",
            "range": "± 105671.17348763975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2981496.8125,
            "unit": "ns",
            "range": "± 91956.04514831283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2495155.489361702,
            "unit": "ns",
            "range": "± 92647.03129523653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6230567.72,
            "unit": "ns",
            "range": "± 144413.5009958441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6311306.063616072,
            "unit": "ns",
            "range": "± 30433.084572217434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911229.4328125,
            "unit": "ns",
            "range": "± 3822.8231765431224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383087.772265625,
            "unit": "ns",
            "range": "± 3182.185938075692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2945612.68125,
            "unit": "ns",
            "range": "± 30710.24571073815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841131.9551432292,
            "unit": "ns",
            "range": "± 1039.1680046768818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775063.6013020833,
            "unit": "ns",
            "range": "± 775.9035839888926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389128.92307692306,
            "unit": "ns",
            "range": "± 3774.08014094248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329642.85,
            "unit": "ns",
            "range": "± 11698.142860607384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300733.6666666667,
            "unit": "ns",
            "range": "± 7650.500095428071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6251190.8,
            "unit": "ns",
            "range": "± 28160.5007468668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4430640.357142857,
            "unit": "ns",
            "range": "± 45929.4093190964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30346.097826086956,
            "unit": "ns",
            "range": "± 1843.119489307016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133816.35064935064,
            "unit": "ns",
            "range": "± 6634.484223728388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123157.55555555556,
            "unit": "ns",
            "range": "± 2568.1813712344297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 272780.0294117647,
            "unit": "ns",
            "range": "± 5553.050041617299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11733.92857142857,
            "unit": "ns",
            "range": "± 1154.8856885459477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28820.65168539326,
            "unit": "ns",
            "range": "± 1631.5849175594121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3859289.066666667,
            "unit": "ns",
            "range": "± 46625.04095665252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4033908,
            "unit": "ns",
            "range": "± 67663.09261674002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4732760,
            "unit": "ns",
            "range": "± 100690.53999148966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5015977.930232558,
            "unit": "ns",
            "range": "± 183792.06905182864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8117006.324324325,
            "unit": "ns",
            "range": "± 271659.6367714217"
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
          "id": "11867e0f2416b38fc99c8ad85f9f6e62a0073dd7",
          "message": "Changelog",
          "timestamp": "2023-04-18T17:36:38+09:00",
          "tree_id": "79c3d874bf09441dcfab21298ea048772d7d86ec",
          "url": "https://github.com/greymistcube/libplanet/commit/11867e0f2416b38fc99c8ad85f9f6e62a0073dd7"
        },
        "date": 1681807992683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10830593.2,
            "unit": "ns",
            "range": "± 130553.86937210469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27998569.111111112,
            "unit": "ns",
            "range": "± 839496.0979087661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66037308.86666667,
            "unit": "ns",
            "range": "± 334502.12699854746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138437958.45,
            "unit": "ns",
            "range": "± 1672249.5604776936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260348422.73333332,
            "unit": "ns",
            "range": "± 2611927.48260441"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58338.89411764706,
            "unit": "ns",
            "range": "± 3127.4467412903846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1703258.8817204302,
            "unit": "ns",
            "range": "± 127726.30370792083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3181338.901960784,
            "unit": "ns",
            "range": "± 129680.53232390046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2729794.1379310344,
            "unit": "ns",
            "range": "± 117923.42604946566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6971606.105263158,
            "unit": "ns",
            "range": "± 240192.20370528148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6925712.100520833,
            "unit": "ns",
            "range": "± 66840.5236625216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2173521.9973958335,
            "unit": "ns",
            "range": "± 10733.131514018818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1596196.1154947917,
            "unit": "ns",
            "range": "± 6359.4928766976545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3114495.75078125,
            "unit": "ns",
            "range": "± 3109.660569352076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 981925.3856770833,
            "unit": "ns",
            "range": "± 7537.236095581361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886663.8592447917,
            "unit": "ns",
            "range": "± 3048.132157961391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 410416.3214285714,
            "unit": "ns",
            "range": "± 11053.125554452314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328196.05555555556,
            "unit": "ns",
            "range": "± 10446.707166633743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281569.847826087,
            "unit": "ns",
            "range": "± 10807.908380168028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6950232.875,
            "unit": "ns",
            "range": "± 133581.00322120407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4985937.466666667,
            "unit": "ns",
            "range": "± 76917.47891721979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26423.17021276596,
            "unit": "ns",
            "range": "± 1772.9378185233945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117212.1914893617,
            "unit": "ns",
            "range": "± 7885.449346980662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112012.68,
            "unit": "ns",
            "range": "± 9372.59063599275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 233672.68041237115,
            "unit": "ns",
            "range": "± 18711.946211214457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8332.78494623656,
            "unit": "ns",
            "range": "± 1040.8926337467817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24578.021276595744,
            "unit": "ns",
            "range": "± 2522.584026665009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4164177.3333333335,
            "unit": "ns",
            "range": "± 128405.85215846536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4424641.684210527,
            "unit": "ns",
            "range": "± 95355.90130666191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5079317.125,
            "unit": "ns",
            "range": "± 97189.39594275018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5545872.127659574,
            "unit": "ns",
            "range": "± 216292.29036146766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8710264.717391305,
            "unit": "ns",
            "range": "± 213970.61906676402"
          }
        ]
      }
    ]
  }
}