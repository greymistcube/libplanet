window.BENCHMARK_DATA = {
  "lastUpdate": 1703656650084,
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
          "id": "e9e2b20ae2a1ec19763e3beb49d7770ae84426a1",
          "message": "Slightly optimized FullNode",
          "timestamp": "2023-12-27T14:44:14+09:00",
          "tree_id": "3079199eb5d6660ea78a5af483aec226128c61d9",
          "url": "https://github.com/greymistcube/libplanet/commit/e9e2b20ae2a1ec19763e3beb49d7770ae84426a1"
        },
        "date": 1703656619469,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972105.2083333334,
            "unit": "ns",
            "range": "± 109307.49949693262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1744053.6842105263,
            "unit": "ns",
            "range": "± 101064.49469198381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1311142.5531914893,
            "unit": "ns",
            "range": "± 99880.60236549932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5146560,
            "unit": "ns",
            "range": "± 195737.21762515264"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34638.63636363636,
            "unit": "ns",
            "range": "± 2062.9981428767846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5058564.285714285,
            "unit": "ns",
            "range": "± 55013.40545921312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13821903.846153846,
            "unit": "ns",
            "range": "± 159444.16272049918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34037785.71428572,
            "unit": "ns",
            "range": "± 538253.9918850763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65058150,
            "unit": "ns",
            "range": "± 1224317.3749754052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130379000,
            "unit": "ns",
            "range": "± 1771211.979327795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3384720.234375,
            "unit": "ns",
            "range": "± 8616.7305565551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1037465.5143229166,
            "unit": "ns",
            "range": "± 5685.270528685263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737522.578125,
            "unit": "ns",
            "range": "± 3931.209436675638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934742.201450893,
            "unit": "ns",
            "range": "± 12032.792580711111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620131.77734375,
            "unit": "ns",
            "range": "± 3095.6952699772187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552870.6612723215,
            "unit": "ns",
            "range": "± 1705.2716714364792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2146707.8947368423,
            "unit": "ns",
            "range": "± 73875.00173898181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2245341.5384615385,
            "unit": "ns",
            "range": "± 104332.12276833129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2781644.6428571427,
            "unit": "ns",
            "range": "± 101636.84267509021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2840726.8041237113,
            "unit": "ns",
            "range": "± 305622.57821653434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6153985.135135135,
            "unit": "ns",
            "range": "± 206702.00667764348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176454.73684210525,
            "unit": "ns",
            "range": "± 10349.19843150628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167933.33333333334,
            "unit": "ns",
            "range": "± 8399.442280927386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143313.63636363635,
            "unit": "ns",
            "range": "± 6699.182185762823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2793928.125,
            "unit": "ns",
            "range": "± 85197.33917689319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2494033.3333333335,
            "unit": "ns",
            "range": "± 22444.004396126227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12220,
            "unit": "ns",
            "range": "± 1785.5567103728313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57127.083333333336,
            "unit": "ns",
            "range": "± 6525.117126057732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46444.32989690721,
            "unit": "ns",
            "range": "± 3489.9549027699054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59600,
            "unit": "ns",
            "range": "± 10094.437796063961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2805.31914893617,
            "unit": "ns",
            "range": "± 654.5731632758775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12874.193548387097,
            "unit": "ns",
            "range": "± 1792.3086415234577"
          }
        ]
      }
    ]
  }
}