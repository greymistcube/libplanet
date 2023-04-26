window.BENCHMARK_DATA = {
  "lastUpdate": 1682502059648,
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
          "id": "be2728468029bd04f0280085ec779ebef5413c1a",
          "message": "Cleanup; renaming",
          "timestamp": "2023-04-26T18:22:11+09:00",
          "tree_id": "f33b659d8a09bd7e55f381b8a52753879e68356d",
          "url": "https://github.com/greymistcube/libplanet/commit/be2728468029bd04f0280085ec779ebef5413c1a"
        },
        "date": 1682502051616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9073981.315789474,
            "unit": "ns",
            "range": "± 393997.67423004436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22200116.730769232,
            "unit": "ns",
            "range": "± 1095550.420762374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59477547.01282051,
            "unit": "ns",
            "range": "± 3056208.352038921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118491147.5,
            "unit": "ns",
            "range": "± 4522942.930594115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237393012.58064517,
            "unit": "ns",
            "range": "± 7127575.297606697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67105.55670103093,
            "unit": "ns",
            "range": "± 18589.089504424963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640275.46875,
            "unit": "ns",
            "range": "± 178753.1601974282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3390049.2842105264,
            "unit": "ns",
            "range": "± 295283.57629630074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2660653.2083333335,
            "unit": "ns",
            "range": "± 246246.50504894336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7291117.989690722,
            "unit": "ns",
            "range": "± 538689.0728827734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6356530.422309028,
            "unit": "ns",
            "range": "± 209490.7870702922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2035301.4102783203,
            "unit": "ns",
            "range": "± 62020.3681949871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1465845.7472098214,
            "unit": "ns",
            "range": "± 21742.593775063313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2812311.97453125,
            "unit": "ns",
            "range": "± 73684.24984217033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 935754.2483552631,
            "unit": "ns",
            "range": "± 20728.935896354884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 845283.9391961349,
            "unit": "ns",
            "range": "± 18754.23723127973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364280.0202020202,
            "unit": "ns",
            "range": "± 52687.642880137406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337430.5612244898,
            "unit": "ns",
            "range": "± 47586.05516326572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298597.8762886598,
            "unit": "ns",
            "range": "± 41565.246874456745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4892322.275510204,
            "unit": "ns",
            "range": "± 326359.23403392767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4314276.479166667,
            "unit": "ns",
            "range": "± 281995.21298337035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22991.12,
            "unit": "ns",
            "range": "± 9134.58580582833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105155.93478260869,
            "unit": "ns",
            "range": "± 18458.986972790088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88063.63440860216,
            "unit": "ns",
            "range": "± 13769.219071652213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110871.83870967742,
            "unit": "ns",
            "range": "± 22507.323623699987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5294.597826086957,
            "unit": "ns",
            "range": "± 466.7883973572072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31059.94845360825,
            "unit": "ns",
            "range": "± 10633.886683000652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3601918.3191489363,
            "unit": "ns",
            "range": "± 240557.97946062114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745632.053763441,
            "unit": "ns",
            "range": "± 236604.7920712827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4855493.4387755105,
            "unit": "ns",
            "range": "± 305970.38575932913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4793192.642857143,
            "unit": "ns",
            "range": "± 374443.7083020006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8022598.357894737,
            "unit": "ns",
            "range": "± 583661.4359230017"
          }
        ]
      }
    ]
  }
}