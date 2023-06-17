window.BENCHMARK_DATA = {
  "lastUpdate": 1687009013945,
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
          "id": "977f00de1f334f7bce2c45892aa4180ad9ac77cf",
          "message": "Moved some tesets; added Delta tests",
          "timestamp": "2023-06-17T22:16:16+09:00",
          "tree_id": "240faaab1c61b42b573cf8cdd8b55166ec87ad35",
          "url": "https://github.com/greymistcube/libplanet/commit/977f00de1f334f7bce2c45892aa4180ad9ac77cf"
        },
        "date": 1687009000183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10469291.24489796,
            "unit": "ns",
            "range": "± 932398.0399218041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25094035.548387095,
            "unit": "ns",
            "range": "± 1126750.1376020086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63020447.241935484,
            "unit": "ns",
            "range": "± 2870564.152278268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121776672.1631579,
            "unit": "ns",
            "range": "± 8027734.935069654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226766533.22727272,
            "unit": "ns",
            "range": "± 5443873.560900102"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78535.69230769231,
            "unit": "ns",
            "range": "± 16246.009427064651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335571.6595744681,
            "unit": "ns",
            "range": "± 30016.258919055315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 367397.6494845361,
            "unit": "ns",
            "range": "± 62590.46795190429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341034.55913978495,
            "unit": "ns",
            "range": "± 43993.04023179278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4651273.81443299,
            "unit": "ns",
            "range": "± 384758.38874692755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4242392.181818182,
            "unit": "ns",
            "range": "± 319230.56556803104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19102.865168539327,
            "unit": "ns",
            "range": "± 3604.761372101586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97939.96703296703,
            "unit": "ns",
            "range": "± 16887.559488471947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108452.81182795699,
            "unit": "ns",
            "range": "± 15203.970872181426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119356.60638297872,
            "unit": "ns",
            "range": "± 21204.327808645998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6771.510869565217,
            "unit": "ns",
            "range": "± 1433.69125904226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19245.54651162791,
            "unit": "ns",
            "range": "± 4049.3570670706167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1711921.0632183908,
            "unit": "ns",
            "range": "± 222508.22205596065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3159653.9770114943,
            "unit": "ns",
            "range": "± 193113.65309542447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2368609.775280899,
            "unit": "ns",
            "range": "± 305115.6423946558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6609591.120689655,
            "unit": "ns",
            "range": "± 758527.1547508069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3505481.159574468,
            "unit": "ns",
            "range": "± 320031.62907899084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3569182.407407407,
            "unit": "ns",
            "range": "± 187492.7542266486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4707707.782608695,
            "unit": "ns",
            "range": "± 211625.4613965207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4422343.520833333,
            "unit": "ns",
            "range": "± 403630.32758568326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7993478.5578947365,
            "unit": "ns",
            "range": "± 666487.9601623389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7186109.766741072,
            "unit": "ns",
            "range": "± 127393.86264914314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2312878.83932977,
            "unit": "ns",
            "range": "± 50462.8608339163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392461.3121969288,
            "unit": "ns",
            "range": "± 35648.56093562841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2691105.180098684,
            "unit": "ns",
            "range": "± 58676.52597934149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867466.958984375,
            "unit": "ns",
            "range": "± 7649.723529621753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836981.4629603794,
            "unit": "ns",
            "range": "± 12493.625834347424"
          }
        ]
      }
    ]
  }
}