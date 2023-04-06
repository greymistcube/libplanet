window.BENCHMARK_DATA = {
  "lastUpdate": 1680757246075,
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
          "id": "2da78731588597800cc25bf5e5ee336ffab1b965",
          "message": "Remove mining",
          "timestamp": "2023-04-06T13:45:24+09:00",
          "tree_id": "c19cda80e6181d02f1edc94274a212e9c9e3677b",
          "url": "https://github.com/greymistcube/libplanet/commit/2da78731588597800cc25bf5e5ee336ffab1b965"
        },
        "date": 1680757232830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7671793.153846154,
            "unit": "ns",
            "range": "± 55064.882832052695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20157814.416666668,
            "unit": "ns",
            "range": "± 664589.6896663544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48350233.875,
            "unit": "ns",
            "range": "± 926925.0927993319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98577561.36666666,
            "unit": "ns",
            "range": "± 1811433.4475458486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198317752.46153846,
            "unit": "ns",
            "range": "± 3078452.7530139936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63776.8085106383,
            "unit": "ns",
            "range": "± 9387.43053497383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380394.43902439025,
            "unit": "ns",
            "range": "± 19042.571607054975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325309.4680851064,
            "unit": "ns",
            "range": "± 25481.28279493233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297821.05670103093,
            "unit": "ns",
            "range": "± 22265.19783062472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5500708.235294118,
            "unit": "ns",
            "range": "± 108315.07311573111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3982933.7647058824,
            "unit": "ns",
            "range": "± 78364.6037351442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19082.170454545456,
            "unit": "ns",
            "range": "± 1990.6561225378664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85249.70833333333,
            "unit": "ns",
            "range": "± 7828.606483399829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83964.07692307692,
            "unit": "ns",
            "range": "± 8481.994480113963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 228418.39361702127,
            "unit": "ns",
            "range": "± 21313.414482114553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7039.147368421052,
            "unit": "ns",
            "range": "± 1301.940752389433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17631.54651162791,
            "unit": "ns",
            "range": "± 2066.827918543303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595029.9793814432,
            "unit": "ns",
            "range": "± 139626.10595600333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944679.4166666665,
            "unit": "ns",
            "range": "± 145475.28232598124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2590560.175257732,
            "unit": "ns",
            "range": "± 290034.63425425626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6545959.888888889,
            "unit": "ns",
            "range": "± 216463.88127554447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260624.361702128,
            "unit": "ns",
            "range": "± 125315.20291725345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3348431.8591549294,
            "unit": "ns",
            "range": "± 164103.35459706013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4462327.279411765,
            "unit": "ns",
            "range": "± 212035.8001062131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4336854.134831461,
            "unit": "ns",
            "range": "± 242230.4384279185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8339892.625,
            "unit": "ns",
            "range": "± 358480.7361127367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6182588.344140625,
            "unit": "ns",
            "range": "± 141065.93053084557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925541.2282552083,
            "unit": "ns",
            "range": "± 17371.324814866224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1279472.3013392857,
            "unit": "ns",
            "range": "± 9846.275154013689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2420501.115364583,
            "unit": "ns",
            "range": "± 33369.05026438164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870963.1333984375,
            "unit": "ns",
            "range": "± 7577.12895275058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732183.3795340402,
            "unit": "ns",
            "range": "± 5104.824374922703"
          }
        ]
      }
    ]
  }
}