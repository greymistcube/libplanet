window.BENCHMARK_DATA = {
  "lastUpdate": 1707289243046,
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
          "id": "936cae2dc655caf280c893eab7e22f028ca67efe",
          "message": "Release 4.0.4",
          "timestamp": "2024-02-07T15:45:59+09:00",
          "tree_id": "1aa9b62a8c2eac4e5a79b8ae47618099457f6eda",
          "url": "https://github.com/greymistcube/libplanet/commit/936cae2dc655caf280c893eab7e22f028ca67efe"
        },
        "date": 1707289037073,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202055.47692307693,
            "unit": "ns",
            "range": "± 8924.20362537271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194849.828125,
            "unit": "ns",
            "range": "± 8533.981040438366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163715.86956521738,
            "unit": "ns",
            "range": "± 3908.349992520069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3212787.16,
            "unit": "ns",
            "range": "± 77931.94256244783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2854127.3076923075,
            "unit": "ns",
            "range": "± 36670.445516756896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15657.1875,
            "unit": "ns",
            "range": "± 2123.460801380614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66759.54166666667,
            "unit": "ns",
            "range": "± 4968.190755971362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64287.893939393936,
            "unit": "ns",
            "range": "± 16237.91847071525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66038.58695652174,
            "unit": "ns",
            "range": "± 9249.589507555971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3812.554347826087,
            "unit": "ns",
            "range": "± 1320.6174743268286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13926.336734693878,
            "unit": "ns",
            "range": "± 2809.1603615648514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39895.89175257732,
            "unit": "ns",
            "range": "± 5945.83873666544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2360112.7333333334,
            "unit": "ns",
            "range": "± 38742.34038853296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2555828.7419354836,
            "unit": "ns",
            "range": "± 75431.27446224046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153927.2916666665,
            "unit": "ns",
            "range": "± 80292.69314337127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3159369.302325581,
            "unit": "ns",
            "range": "± 116045.56127054969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13826584.085106382,
            "unit": "ns",
            "range": "± 1028184.8687509676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 938897.756097561,
            "unit": "ns",
            "range": "± 57055.35342549091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1860969.7884615385,
            "unit": "ns",
            "range": "± 75955.88951886109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1639666.9696969697,
            "unit": "ns",
            "range": "± 182891.55049113146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12697903.711111112,
            "unit": "ns",
            "range": "± 924388.3797189962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5781262.133333334,
            "unit": "ns",
            "range": "± 60482.117163277115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14745945.642857144,
            "unit": "ns",
            "range": "± 85581.27653389104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38305449.93333333,
            "unit": "ns",
            "range": "± 350462.9242274661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75413776.5,
            "unit": "ns",
            "range": "± 882929.3138976904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150680107.92857143,
            "unit": "ns",
            "range": "± 908676.578153315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3709579.812800481,
            "unit": "ns",
            "range": "± 9368.334074167165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200898.8798828125,
            "unit": "ns",
            "range": "± 1737.935506547229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772039.4164713542,
            "unit": "ns",
            "range": "± 13585.015795936493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916151.5739182692,
            "unit": "ns",
            "range": "± 7363.077660734928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619557.4235026041,
            "unit": "ns",
            "range": "± 691.296033317284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577657.9481026785,
            "unit": "ns",
            "range": "± 1937.935478626489"
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
          "id": "64c3d37f522affc57f1837edce888aebf1a08be7",
          "message": "Release 4.0.4",
          "timestamp": "2024-02-07T15:49:45+09:00",
          "tree_id": "6334141a92893468fe729e7e55eb13bb97e411f1",
          "url": "https://github.com/greymistcube/libplanet/commit/64c3d37f522affc57f1837edce888aebf1a08be7"
        },
        "date": 1707289235710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198441.70909090908,
            "unit": "ns",
            "range": "± 8353.47137349969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188851.4193548387,
            "unit": "ns",
            "range": "± 7937.421298535117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163823.88888888888,
            "unit": "ns",
            "range": "± 4386.497834994366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3241782.882352941,
            "unit": "ns",
            "range": "± 63788.23462528411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2866548.6333333333,
            "unit": "ns",
            "range": "± 35752.99470747005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12439.659574468085,
            "unit": "ns",
            "range": "± 1318.5899405241307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64897.085106382976,
            "unit": "ns",
            "range": "± 6130.589904187377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61606.882352941175,
            "unit": "ns",
            "range": "± 1964.3139563402494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62429.5,
            "unit": "ns",
            "range": "± 9691.238877960377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3193.7872340425533,
            "unit": "ns",
            "range": "± 679.2534267007716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14873.459183673469,
            "unit": "ns",
            "range": "± 2845.7517484455257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39640.65151515151,
            "unit": "ns",
            "range": "± 5111.227727755062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2388777.076923077,
            "unit": "ns",
            "range": "± 29169.90139242143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2555594.06122449,
            "unit": "ns",
            "range": "± 101589.43547342249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3205902.210526316,
            "unit": "ns",
            "range": "± 71154.19223112808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3332117.523809524,
            "unit": "ns",
            "range": "± 75403.40513439632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13740070.010638298,
            "unit": "ns",
            "range": "± 853916.4362239608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 978567.5752688173,
            "unit": "ns",
            "range": "± 73228.25025417274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1882289.8852459015,
            "unit": "ns",
            "range": "± 84001.12375024086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1576552.1063829786,
            "unit": "ns",
            "range": "± 130670.3317994973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12777745.90625,
            "unit": "ns",
            "range": "± 1036429.6200888652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5492646.8,
            "unit": "ns",
            "range": "± 27142.17953718108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14282700.533333333,
            "unit": "ns",
            "range": "± 104541.1494271628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36142099.92307692,
            "unit": "ns",
            "range": "± 381493.03755343106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75158817.5,
            "unit": "ns",
            "range": "± 401228.47838256985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148359316.13333333,
            "unit": "ns",
            "range": "± 1138205.3577094744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3799096.7721354165,
            "unit": "ns",
            "range": "± 43477.07653168477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217094.9962565105,
            "unit": "ns",
            "range": "± 3482.019915095335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759525.019140625,
            "unit": "ns",
            "range": "± 11332.053072672503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1900922.5030048077,
            "unit": "ns",
            "range": "± 4244.666060595433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630542.0786830357,
            "unit": "ns",
            "range": "± 2020.5612517023008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573295.7817758414,
            "unit": "ns",
            "range": "± 2333.2329548762054"
          }
        ]
      }
    ]
  }
}