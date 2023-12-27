window.BENCHMARK_DATA = {
  "lastUpdate": 1703656877294,
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
          "id": "ec9a0fbdbc46e0e6d87cf8864586628b5b286582",
          "message": "Changelog",
          "timestamp": "2023-12-27T14:50:07+09:00",
          "tree_id": "d889867351d6c3596bc4fa674fbb5420ac7897dc",
          "url": "https://github.com/greymistcube/libplanet/commit/ec9a0fbdbc46e0e6d87cf8864586628b5b286582"
        },
        "date": 1703656859273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974130.5263157894,
            "unit": "ns",
            "range": "± 109270.94285237821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837552,
            "unit": "ns",
            "range": "± 147379.6461420969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1428267.3684210526,
            "unit": "ns",
            "range": "± 108437.66857695427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5591441.428571428,
            "unit": "ns",
            "range": "± 271825.6812967133"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35407.792207792205,
            "unit": "ns",
            "range": "± 1826.685683918615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5326757.142857143,
            "unit": "ns",
            "range": "± 36205.32715341369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13652592.307692308,
            "unit": "ns",
            "range": "± 85838.51565137162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34227750,
            "unit": "ns",
            "range": "± 277789.551639366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67605842.85714285,
            "unit": "ns",
            "range": "± 332494.05712279736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140152146.66666666,
            "unit": "ns",
            "range": "± 879922.4567025914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3334339.4856770835,
            "unit": "ns",
            "range": "± 6870.604799184144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070402.357700893,
            "unit": "ns",
            "range": "± 3807.9572573301384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733507.51953125,
            "unit": "ns",
            "range": "± 805.6491303712663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1904775.420673077,
            "unit": "ns",
            "range": "± 2941.953762312352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627053.8225446428,
            "unit": "ns",
            "range": "± 1286.2915167059502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556041.875,
            "unit": "ns",
            "range": "± 1971.8462251062545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2511086.3636363638,
            "unit": "ns",
            "range": "± 54084.9710262388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2448029.487179487,
            "unit": "ns",
            "range": "± 84457.15568913337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2975780.64516129,
            "unit": "ns",
            "range": "± 89665.34231743737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2835000,
            "unit": "ns",
            "range": "± 119891.16250774128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6445706.382978723,
            "unit": "ns",
            "range": "± 224175.90473268912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179398.61111111112,
            "unit": "ns",
            "range": "± 8844.549416552922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169229.0909090909,
            "unit": "ns",
            "range": "± 7080.794910577241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143603.92156862744,
            "unit": "ns",
            "range": "± 5873.362266515279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2734166.6666666665,
            "unit": "ns",
            "range": "± 57309.15130700691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472889.4736842103,
            "unit": "ns",
            "range": "± 54074.1455445601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12009.09090909091,
            "unit": "ns",
            "range": "± 1738.782528465166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52830,
            "unit": "ns",
            "range": "± 3903.9147738901465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45118.75,
            "unit": "ns",
            "range": "± 2367.132204465505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60746.23655913978,
            "unit": "ns",
            "range": "± 12462.60981059977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2829.1666666666665,
            "unit": "ns",
            "range": "± 756.1560221439496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11206.896551724138,
            "unit": "ns",
            "range": "± 1458.7979364554146"
          }
        ]
      }
    ]
  }
}