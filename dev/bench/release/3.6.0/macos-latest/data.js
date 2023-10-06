window.BENCHMARK_DATA = {
  "lastUpdate": 1696584484888,
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
          "id": "99e4103018faeb05ec1a274bc5b19c300bdd8bd1",
          "message": "Release 3.6.0",
          "timestamp": "2023-10-06T18:08:29+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/greymistcube/libplanet/commit/99e4103018faeb05ec1a274bc5b19c300bdd8bd1"
        },
        "date": 1696584470685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9165962.8,
            "unit": "ns",
            "range": "± 711314.4428359643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21926849.5875,
            "unit": "ns",
            "range": "± 1564830.414931107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 115877350.83838384,
            "unit": "ns",
            "range": "± 77018444.58805548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109847385.48571429,
            "unit": "ns",
            "range": "± 3564762.5569765535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219758033.14285713,
            "unit": "ns",
            "range": "± 3159336.835604698"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74082.91489361702,
            "unit": "ns",
            "range": "± 8931.83467246987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363735.34210526315,
            "unit": "ns",
            "range": "± 42425.53323987302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331777.76086956525,
            "unit": "ns",
            "range": "± 29037.11616772218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335428.8947368421,
            "unit": "ns",
            "range": "± 34893.80762824992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4334324.055555556,
            "unit": "ns",
            "range": "± 276824.9710646481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3851557.6612903224,
            "unit": "ns",
            "range": "± 113131.18221577897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20277.13440860215,
            "unit": "ns",
            "range": "± 2318.7669079891984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104791.51,
            "unit": "ns",
            "range": "± 12738.382169366263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107639.59595959596,
            "unit": "ns",
            "range": "± 14273.269553015693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101247.91935483871,
            "unit": "ns",
            "range": "± 11698.113247463918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8775.29569892473,
            "unit": "ns",
            "range": "± 1731.6494810436352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26006.637362637364,
            "unit": "ns",
            "range": "± 6132.179595319694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668344.7448979593,
            "unit": "ns",
            "range": "± 286772.1092560721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2924419.2747252746,
            "unit": "ns",
            "range": "± 210965.47892587472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2366993.414893617,
            "unit": "ns",
            "range": "± 249935.7163188902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10712660.61392405,
            "unit": "ns",
            "range": "± 803735.9578251443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3412675.290322581,
            "unit": "ns",
            "range": "± 151171.16396379448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3621999.4693877553,
            "unit": "ns",
            "range": "± 297856.30940903747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4712603.173469388,
            "unit": "ns",
            "range": "± 334346.2759816604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4603619.65625,
            "unit": "ns",
            "range": "± 466383.23536498606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16055289.625,
            "unit": "ns",
            "range": "± 2007683.5215155068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5888569.634733606,
            "unit": "ns",
            "range": "± 265649.53683926834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822039.1007254464,
            "unit": "ns",
            "range": "± 50941.99104409409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1048716.3756893382,
            "unit": "ns",
            "range": "± 20242.771625373603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576246.4656808036,
            "unit": "ns",
            "range": "± 57733.0274780704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799132.087109375,
            "unit": "ns",
            "range": "± 14641.498626187067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837414.8247395833,
            "unit": "ns",
            "range": "± 15646.222362337063"
          }
        ]
      }
    ]
  }
}