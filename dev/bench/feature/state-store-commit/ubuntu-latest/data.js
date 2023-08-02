window.BENCHMARK_DATA = {
  "lastUpdate": 1690963642209,
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
          "id": "9378f081b0be228a89dd695049564cd1e9fa248f",
          "message": "Fix tests; update to new API",
          "timestamp": "2023-08-02T16:53:42+09:00",
          "tree_id": "0ad558a6ae1dac5b762861ec861e86be87aee7bd",
          "url": "https://github.com/greymistcube/libplanet/commit/9378f081b0be228a89dd695049564cd1e9fa248f"
        },
        "date": 1690963634512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292567.9682539682,
            "unit": "ns",
            "range": "± 13412.89034181509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284570.51612903224,
            "unit": "ns",
            "range": "± 8643.260757649927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256131.79411764705,
            "unit": "ns",
            "range": "± 7419.204873591778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4336861.533333333,
            "unit": "ns",
            "range": "± 24229.261948156425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3973074,
            "unit": "ns",
            "range": "± 34214.929107717784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22018.157894736843,
            "unit": "ns",
            "range": "± 1622.7613143388248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97805.609375,
            "unit": "ns",
            "range": "± 4373.2005736861065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76385.09375,
            "unit": "ns",
            "range": "± 2329.705178071653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114076.25,
            "unit": "ns",
            "range": "± 1704.3807793181343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5239.010526315789,
            "unit": "ns",
            "range": "± 576.0285249795755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20073.96875,
            "unit": "ns",
            "range": "± 2024.379205444032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439252.5959595959,
            "unit": "ns",
            "range": "± 109911.0703276507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2653782.3636363638,
            "unit": "ns",
            "range": "± 76407.9388532444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1825818.6923076923,
            "unit": "ns",
            "range": "± 101734.42390914934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4856082.268292683,
            "unit": "ns",
            "range": "± 172893.10010610957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6187069.829799107,
            "unit": "ns",
            "range": "± 16699.472007338507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2009050.4126674107,
            "unit": "ns",
            "range": "± 935.6816016948011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361604.87421875,
            "unit": "ns",
            "range": "± 786.8169376674322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619483.027644231,
            "unit": "ns",
            "range": "± 4230.947003972797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809715.5784505209,
            "unit": "ns",
            "range": "± 460.79237475417875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737832.1149338942,
            "unit": "ns",
            "range": "± 535.8969935137123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3429773.933333333,
            "unit": "ns",
            "range": "± 56513.52763904872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3593828.8666666667,
            "unit": "ns",
            "range": "± 47676.58668101546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4419714.5,
            "unit": "ns",
            "range": "± 91958.43281053995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3940264.1315789474,
            "unit": "ns",
            "range": "± 127585.54738115829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6465605.704545454,
            "unit": "ns",
            "range": "± 241142.1569259732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7768574.428571428,
            "unit": "ns",
            "range": "± 40972.87977658897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19809310.2,
            "unit": "ns",
            "range": "± 75821.84584010072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51311114.266666666,
            "unit": "ns",
            "range": "± 213707.7068512928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101995849.13333334,
            "unit": "ns",
            "range": "± 219418.67553536833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202585637.46666667,
            "unit": "ns",
            "range": "± 396540.999822909"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51694.021505376346,
            "unit": "ns",
            "range": "± 4945.735448845528"
          }
        ]
      }
    ]
  }
}