window.BENCHMARK_DATA = {
  "lastUpdate": 1691652209203,
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
          "id": "04e17bc86bcdb3cd1e6aedbf482fc6fd16e021d9",
          "message": "Merge tag '3.1.2' into port/3.1.2-to-main\n\nLibplanet 3.1.2",
          "timestamp": "2023-08-10T16:03:27+09:00",
          "tree_id": "4b1c486d0920781a82c56ed2b2866158aa607126",
          "url": "https://github.com/greymistcube/libplanet/commit/04e17bc86bcdb3cd1e6aedbf482fc6fd16e021d9"
        },
        "date": 1691651959045,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1249891.9191919193,
            "unit": "ns",
            "range": "± 99029.31505446593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2362353.3333333335,
            "unit": "ns",
            "range": "± 98630.50455806527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584478.7878787878,
            "unit": "ns",
            "range": "± 105847.80012051505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4404715,
            "unit": "ns",
            "range": "± 279362.67017964117"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45827.90697674418,
            "unit": "ns",
            "range": "± 2513.0553779058155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7156391.666666667,
            "unit": "ns",
            "range": "± 18897.64094624864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19339300,
            "unit": "ns",
            "range": "± 284258.6523372181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49662897.222222224,
            "unit": "ns",
            "range": "± 1658909.7151849223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96537835.71428572,
            "unit": "ns",
            "range": "± 1550033.153792893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191103226.66666666,
            "unit": "ns",
            "range": "± 3243396.543851317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4508186.770833333,
            "unit": "ns",
            "range": "± 13173.396563859009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1409227.2526041667,
            "unit": "ns",
            "range": "± 6020.178347828781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046198.4765625,
            "unit": "ns",
            "range": "± 6698.246118807164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618842.96875,
            "unit": "ns",
            "range": "± 7176.501849142986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831707.5520833334,
            "unit": "ns",
            "range": "± 2706.844745419137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755110.64453125,
            "unit": "ns",
            "range": "± 1995.2720633724962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3066560,
            "unit": "ns",
            "range": "± 53820.65190452984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3269182.8571428573,
            "unit": "ns",
            "range": "± 106532.72484164138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3962097.6744186045,
            "unit": "ns",
            "range": "± 145926.92641046667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3524225.4901960786,
            "unit": "ns",
            "range": "± 142537.3029675211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5807125,
            "unit": "ns",
            "range": "± 228348.44268484894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243667.3469387755,
            "unit": "ns",
            "range": "± 9651.303619958593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231766.07142857142,
            "unit": "ns",
            "range": "± 9699.58343596099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207738.09523809524,
            "unit": "ns",
            "range": "± 4855.870281471303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3931922.222222222,
            "unit": "ns",
            "range": "± 81745.41941155627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3560064.285714286,
            "unit": "ns",
            "range": "± 53981.615205732596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17923.958333333332,
            "unit": "ns",
            "range": "± 1369.575023725986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79942.70833333333,
            "unit": "ns",
            "range": "± 6397.890191579468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66377.77777777778,
            "unit": "ns",
            "range": "± 1740.321219981515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71817.85714285714,
            "unit": "ns",
            "range": "± 6639.66105816387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4591.7525773195875,
            "unit": "ns",
            "range": "± 497.0056386108678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17580.85106382979,
            "unit": "ns",
            "range": "± 1547.5458612374835"
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
          "id": "3789e108ccadf24637956b134961a96a602565c6",
          "message": "Merge tag '3.1.2' into port/3.1.2-to-main\n\nLibplanet 3.1.2",
          "timestamp": "2023-08-10T16:05:36+09:00",
          "tree_id": "b878dcdafcb1e7623fb1d36600d7e92799bba72d",
          "url": "https://github.com/greymistcube/libplanet/commit/3789e108ccadf24637956b134961a96a602565c6"
        },
        "date": 1691652184358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1389353,
            "unit": "ns",
            "range": "± 96288.9280638058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2646909.195402299,
            "unit": "ns",
            "range": "± 143996.49110080805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1799878.7878787878,
            "unit": "ns",
            "range": "± 111359.11413331462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4856812.6760563385,
            "unit": "ns",
            "range": "± 235839.4786590341"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49580.434782608696,
            "unit": "ns",
            "range": "± 4560.731557147306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7885236.666666667,
            "unit": "ns",
            "range": "± 233429.56625564562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21284023.529411763,
            "unit": "ns",
            "range": "± 359070.7251528098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53564638.461538464,
            "unit": "ns",
            "range": "± 604753.1335711313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108884735.71428572,
            "unit": "ns",
            "range": "± 501346.38356996386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219098433.33333334,
            "unit": "ns",
            "range": "± 1204908.7266360924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4679071.940104167,
            "unit": "ns",
            "range": "± 27926.43393807372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1451121.4453125,
            "unit": "ns",
            "range": "± 20870.38526346158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1098034.2057291667,
            "unit": "ns",
            "range": "± 10979.54544170397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2686526.2555803573,
            "unit": "ns",
            "range": "± 20086.990457163738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840520.5147879465,
            "unit": "ns",
            "range": "± 5917.242131421455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768090.6877790178,
            "unit": "ns",
            "range": "± 4626.8901928778005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3529560,
            "unit": "ns",
            "range": "± 102772.42888017697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3652974.285714286,
            "unit": "ns",
            "range": "± 117519.98914541941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4279217.647058823,
            "unit": "ns",
            "range": "± 75129.365391421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4030214.285714286,
            "unit": "ns",
            "range": "± 59279.11627524171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6151564.705882353,
            "unit": "ns",
            "range": "± 175673.86946711008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273159.01639344264,
            "unit": "ns",
            "range": "± 11828.107442996114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267638.1443298969,
            "unit": "ns",
            "range": "± 16931.660698839274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247924.74226804124,
            "unit": "ns",
            "range": "± 17634.359399856265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4277593.75,
            "unit": "ns",
            "range": "± 81289.49886055394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3983280,
            "unit": "ns",
            "range": "± 70031.76014189154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24898.96907216495,
            "unit": "ns",
            "range": "± 3775.620667667349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126954.63917525773,
            "unit": "ns",
            "range": "± 13144.255879617756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80651.06382978724,
            "unit": "ns",
            "range": "± 6565.988361029302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99529.59183673469,
            "unit": "ns",
            "range": "± 17748.0082180501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6951.0204081632655,
            "unit": "ns",
            "range": "± 1787.1964393936316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22282.105263157893,
            "unit": "ns",
            "range": "± 2528.3490091769463"
          }
        ]
      }
    ]
  }
}