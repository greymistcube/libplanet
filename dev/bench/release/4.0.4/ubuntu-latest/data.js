window.BENCHMARK_DATA = {
  "lastUpdate": 1707289046401,
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
      }
    ]
  }
}