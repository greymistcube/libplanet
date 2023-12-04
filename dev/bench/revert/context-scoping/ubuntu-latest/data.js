window.BENCHMARK_DATA = {
  "lastUpdate": 1701670295613,
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
          "id": "4b0b11cf5148ac89930386f63f1a7fdc40d6fdf8",
          "message": "Revert \"Introduce ITxContext\"\n\nThis reverts commit c871f59f57582d9c91d4f04cd2a036b51420a91f.",
          "timestamp": "2023-12-04T15:00:12+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/greymistcube/libplanet/commit/4b0b11cf5148ac89930386f63f1a7fdc40d6fdf8"
        },
        "date": 1701670289397,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209507.71794871794,
            "unit": "ns",
            "range": "± 6899.067984150652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201677.35714285713,
            "unit": "ns",
            "range": "± 9759.947913610886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162786.52631578947,
            "unit": "ns",
            "range": "± 3569.7363016276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3071903.5384615385,
            "unit": "ns",
            "range": "± 35928.61624484348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2858665.0714285714,
            "unit": "ns",
            "range": "± 31158.10967521886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14264.393258426966,
            "unit": "ns",
            "range": "± 2000.3602949217645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66965.15957446808,
            "unit": "ns",
            "range": "± 6718.536544281264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74072.72,
            "unit": "ns",
            "range": "± 14535.573320275018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75278.80208333333,
            "unit": "ns",
            "range": "± 16089.892396107296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4013.6907216494847,
            "unit": "ns",
            "range": "± 793.5499270265537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14322.263157894737,
            "unit": "ns",
            "range": "± 2252.769048850327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714282.97421875,
            "unit": "ns",
            "range": "± 48025.53391541227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1181580.923549107,
            "unit": "ns",
            "range": "± 5037.907961401521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777899.6716308594,
            "unit": "ns",
            "range": "± 5700.645501289036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944708.900669643,
            "unit": "ns",
            "range": "± 18228.85538214554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619837.2491736779,
            "unit": "ns",
            "range": "± 873.8160775870705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593951.5199819711,
            "unit": "ns",
            "range": "± 564.4204879157553"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40128.99484536082,
            "unit": "ns",
            "range": "± 5613.820826621621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2461931.8846153845,
            "unit": "ns",
            "range": "± 95829.94199728033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2616808.06097561,
            "unit": "ns",
            "range": "± 75721.268921304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3161883.933333333,
            "unit": "ns",
            "range": "± 32878.5206403092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3006222.4905660376,
            "unit": "ns",
            "range": "± 124650.46396186645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6661082.66,
            "unit": "ns",
            "range": "± 148858.85611256055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5610086.346153846,
            "unit": "ns",
            "range": "± 59233.07331613276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14453507.6,
            "unit": "ns",
            "range": "± 73059.1575210508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36838334.84615385,
            "unit": "ns",
            "range": "± 205264.48440887436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74848931.75,
            "unit": "ns",
            "range": "± 1435605.8509796946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148865224.33333334,
            "unit": "ns",
            "range": "± 253554.10552540436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991452.1237113402,
            "unit": "ns",
            "range": "± 67989.11182701391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1949017.3333333333,
            "unit": "ns",
            "range": "± 93787.00125513862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1498711.8723404256,
            "unit": "ns",
            "range": "± 116860.80064974593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5559380.261904762,
            "unit": "ns",
            "range": "± 199429.12123298092"
          }
        ]
      }
    ]
  }
}