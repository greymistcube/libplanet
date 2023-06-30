window.BENCHMARK_DATA = {
  "lastUpdate": 1688094963787,
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
          "id": "5df2998d3b17ea44161fc3a351c346408e26b893",
          "message": "Changelog",
          "timestamp": "2023-06-30T12:00:26+09:00",
          "tree_id": "f60c43e0317c439fc9293135883f8bff07a65377",
          "url": "https://github.com/greymistcube/libplanet/commit/5df2998d3b17ea44161fc3a351c346408e26b893"
        },
        "date": 1688094950129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8053747.12,
            "unit": "ns",
            "range": "± 210520.28952936266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19856874.6,
            "unit": "ns",
            "range": "± 341065.6512285742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49482055.25,
            "unit": "ns",
            "range": "± 2444825.779141424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97636452.4,
            "unit": "ns",
            "range": "± 760144.7868685282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195686541.53333333,
            "unit": "ns",
            "range": "± 2093069.24147407"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55892.96808510638,
            "unit": "ns",
            "range": "± 6600.610671409852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321680.23595505615,
            "unit": "ns",
            "range": "± 24358.60574828762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312331.0888888889,
            "unit": "ns",
            "range": "± 23148.714707273735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297165.0625,
            "unit": "ns",
            "range": "± 19079.781059547386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4239313.076923077,
            "unit": "ns",
            "range": "± 215430.03796517287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3674272.5,
            "unit": "ns",
            "range": "± 63074.598984365024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17192.65263157895,
            "unit": "ns",
            "range": "± 1769.0053508237336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88561.32989690722,
            "unit": "ns",
            "range": "± 10918.2171628446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85909.78021978022,
            "unit": "ns",
            "range": "± 7048.469975505635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108707.32989690722,
            "unit": "ns",
            "range": "± 13839.968266553253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5054.68085106383,
            "unit": "ns",
            "range": "± 716.647210980214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16649.206521739132,
            "unit": "ns",
            "range": "± 1781.6280524620274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575459.2268041237,
            "unit": "ns",
            "range": "± 199057.61071512612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2806064.671875,
            "unit": "ns",
            "range": "± 129499.42397641759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2018708.7083333333,
            "unit": "ns",
            "range": "± 200369.85839139507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5720380.214285715,
            "unit": "ns",
            "range": "± 242800.7760116185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3176736.68,
            "unit": "ns",
            "range": "± 127098.68518233848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3402130.0172413792,
            "unit": "ns",
            "range": "± 145756.11688473143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4355674.269230769,
            "unit": "ns",
            "range": "± 144246.07504383128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3826331.4777777777,
            "unit": "ns",
            "range": "± 133626.41103353797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7669390.581632653,
            "unit": "ns",
            "range": "± 545371.826546512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6241704.294471154,
            "unit": "ns",
            "range": "± 33591.45716875573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956659.0575420673,
            "unit": "ns",
            "range": "± 16095.229377495922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297427.085546875,
            "unit": "ns",
            "range": "± 13684.745312939282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2529080.9890625,
            "unit": "ns",
            "range": "± 46061.311946847534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865077.7940104167,
            "unit": "ns",
            "range": "± 7184.158798922895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826041.9567057291,
            "unit": "ns",
            "range": "± 5298.349005915489"
          }
        ]
      }
    ]
  }
}