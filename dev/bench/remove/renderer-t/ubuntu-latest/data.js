window.BENCHMARK_DATA = {
  "lastUpdate": 1684143039291,
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
          "id": "2b3cbf39451018cb40616ce35eaec98920f1d09f",
          "message": "Removed t from ValidatingActionRenderer",
          "timestamp": "2023-05-15T18:16:40+09:00",
          "tree_id": "97f78ae1c1cd89e5920809d894e84fe961e1e86c",
          "url": "https://github.com/greymistcube/libplanet/commit/2b3cbf39451018cb40616ce35eaec98920f1d09f"
        },
        "date": 1684143031476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3407317.9285714286,
            "unit": "ns",
            "range": "± 97462.5018660752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3624896.586956522,
            "unit": "ns",
            "range": "± 134449.66184438713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4363495.325,
            "unit": "ns",
            "range": "± 154226.36569423095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4478024.651162791,
            "unit": "ns",
            "range": "± 164641.33519503535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7046767.294117647,
            "unit": "ns",
            "range": "± 223723.21188624742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287552.1914893617,
            "unit": "ns",
            "range": "± 10227.143637608391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275085.67307692306,
            "unit": "ns",
            "range": "± 9744.304113467084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251957.58139534883,
            "unit": "ns",
            "range": "± 9314.124185580065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4377706.666666667,
            "unit": "ns",
            "range": "± 75565.807184076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3970121.5,
            "unit": "ns",
            "range": "± 72643.13784430479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19845.957446808512,
            "unit": "ns",
            "range": "± 1953.39705159512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89980.76190476191,
            "unit": "ns",
            "range": "± 4490.811504252214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79460.35416666667,
            "unit": "ns",
            "range": "± 5505.0566304829745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103677.1836734694,
            "unit": "ns",
            "range": "± 18367.80462702148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5760.917525773196,
            "unit": "ns",
            "range": "± 811.2095350732845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18783.05376344086,
            "unit": "ns",
            "range": "± 1700.8633253221433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5957397.98046875,
            "unit": "ns",
            "range": "± 17608.82258628073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866178.4033954327,
            "unit": "ns",
            "range": "± 2052.427818115371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354428.7518229166,
            "unit": "ns",
            "range": "± 3216.527895313458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612034.0828125,
            "unit": "ns",
            "range": "± 2157.880724975609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827471.6606119792,
            "unit": "ns",
            "range": "± 769.4547260542367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749084.5456194197,
            "unit": "ns",
            "range": "± 262.7036294438126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8050835.625,
            "unit": "ns",
            "range": "± 149622.28989063317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21726400.3125,
            "unit": "ns",
            "range": "± 424928.7063173019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53684509.8,
            "unit": "ns",
            "range": "± 829680.5822390066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107945178.33333333,
            "unit": "ns",
            "range": "± 1715006.8698377053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213285756.46666667,
            "unit": "ns",
            "range": "± 2973269.4652084806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420392.8762886599,
            "unit": "ns",
            "range": "± 107950.39874098984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2707498.522727273,
            "unit": "ns",
            "range": "± 99953.91798258455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309088.849056604,
            "unit": "ns",
            "range": "± 96244.23893995227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5848872.3239436615,
            "unit": "ns",
            "range": "± 284641.0846015319"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48328.59550561798,
            "unit": "ns",
            "range": "± 2244.5673642612833"
          }
        ]
      }
    ]
  }
}